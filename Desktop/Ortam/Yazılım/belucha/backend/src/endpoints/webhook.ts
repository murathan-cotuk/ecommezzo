import express, { Request, Response } from 'express';
import Stripe from 'stripe';
import { getPayloadClient } from '../payload';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

// Stripe webhook endpoint
router.post('/stripe', express.raw({ type: 'application/json' }), async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

  if (!sig) {
    return res.status(400).json({ error: 'Missing stripe-signature header' });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  try {
    const payload = await getPayloadClient();

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Find order by stripeSessionId
        const orders = await payload.find({
          collection: 'orders',
          where: {
            stripeSessionId: {
              equals: session.id,
            },
          },
        });

        if (orders.docs.length > 0) {
          const order = orders.docs[0];

          // Update order status
          await payload.update({
            collection: 'orders',
            id: order.id,
            data: {
              paymentStatus: 'paid',
              status: 'processing',
              stripePaymentIntentId: session.payment_intent as string,
            },
          });

          // Update product stock
          for (const item of order.items) {
            const product = await payload.findByID({
              collection: 'products',
              id: typeof item.product === 'string' ? item.product : item.product.id,
            });

            if (product && product.stock >= item.quantity) {
              await payload.update({
                collection: 'products',
                id: product.id,
                data: {
                  stock: product.stock - item.quantity,
                },
              });
            }
          }
        }

        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Find and update order
        const orders = await payload.find({
          collection: 'orders',
          where: {
            stripePaymentIntentId: {
              equals: paymentIntent.id,
            },
          },
        });

        if (orders.docs.length > 0) {
          await payload.update({
            collection: 'orders',
            id: orders.docs[0].id,
            data: {
              paymentStatus: 'failed',
            },
          });
        }

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error: any) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: error.message || 'Webhook processing failed' });
  }
});

export default router;
