import express, { Request, Response } from 'express';
import Stripe from 'stripe';
import { getPayloadClient } from '../payload';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

router.post('/create-session', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { items, shippingAddress } = req.body;
    const payload = await getPayloadClient();

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Items are required' });
    }

    // Calculate totals
    let subtotal = 0;
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    // Fetch products and calculate totals
    for (const item of items) {
      const product = await payload.findByID({
        collection: 'products',
        id: item.productId,
      });

      if (!product || product.stock < item.quantity) {
        return res.status(400).json({
          error: `Insufficient stock for ${product?.title || 'product'}`,
        });
      }

      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.title,
            images: product.images?.map((img: any) => img.image?.url || '') || [],
          },
          unit_amount: Math.round(product.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      });
    }

    const tax = subtotal * 0.1; // 10% tax
    const shipping = 5.99; // Fixed shipping cost
    const total = subtotal + tax + shipping;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/checkout/cancel`,
      customer_email: req.user?.email,
      metadata: {
        userId: req.user?.id || '',
        sellerId: items[0]?.sellerId || '', // Assuming all items from same seller
      },
    });

    // Create order in database
    const order = await payload.create({
      collection: 'orders',
      data: {
        orderNumber: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
        buyer: req.user?.id,
        seller: items[0]?.sellerId,
        items: items.map((item: any) => ({
          product: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
        subtotal,
        tax,
        shipping,
        total,
        status: 'pending',
        paymentStatus: 'pending',
        stripeSessionId: session.id,
        shippingAddress: shippingAddress || {},
      },
    });

    res.json({
      sessionId: session.id,
      url: session.url,
      orderId: order.id,
    });
  } catch (error: any) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: error.message || 'Failed to create checkout session' });
  }
});

export default router;
