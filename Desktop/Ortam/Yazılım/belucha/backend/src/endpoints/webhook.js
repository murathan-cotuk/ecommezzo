const { Router } = require('express');
const Stripe = require('stripe');
const payload = require('payload');
const express = require('express');

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

// Stripe webhook endpoint (must be before body parser)
router.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  if (!sig) {
    return res.status(400).json({ error: 'No signature' });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;

      // Update order status
      try {
        const orders = await payload.find({
          collection: 'orders',
          where: {
            stripeSessionId: {
              equals: session.id,
            },
          },
          limit: 1,
        });

        if (orders.docs.length > 0) {
          const order = orders.docs[0];

          // Update order
          await payload.update({
            collection: 'orders',
            id: order.id,
            data: {
              paymentStatus: 'paid',
              status: 'processing',
              stripePaymentIntentId: session.payment_intent,
            },
          });

          // Update product stock
          for (const item of order.items) {
            const product = await payload.findByID({
              collection: 'products',
              id: typeof item.product === 'string' ? item.product : item.product.id,
            });

            await payload.update({
              collection: 'products',
              id: product.id,
              data: {
                stock: product.stock - item.quantity,
              },
            });
          }
        }
      } catch (error) {
        console.error('Error updating order:', error);
      }

      break;
    }

    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object;
      console.log('PaymentIntent succeeded:', paymentIntent.id);
      break;
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object;
      console.log('PaymentIntent failed:', paymentIntent.id);

      // Update order status to failed
      try {
        const orders = await payload.find({
          collection: 'orders',
          where: {
            stripePaymentIntentId: {
              equals: paymentIntent.id,
            },
          },
          limit: 1,
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
      } catch (error) {
        console.error('Error updating order status:', error);
      }

      break;
    }

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

module.exports = router;

