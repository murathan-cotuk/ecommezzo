const { Router } = require('express');
const Stripe = require('stripe');
const payload = require('payload');
const { authenticate } = require('../middleware/auth');

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

router.post('/create-session', authenticate, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // Calculate total
    let total = 0;
    const lineItems = [];

    for (const item of items) {
      const product = await payload.findByID({
        collection: 'products',
        id: typeof item.product === 'string' ? item.product : item.product.id,
      });

      if (!product) {
        return res.status(404).json({ error: `Product ${item.product} not found` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ error: `Insufficient stock for ${product.title}` });
      }

      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.title,
            images: product.images?.map((img) => img.image?.url || '') || [],
          },
          unit_amount: Math.round(product.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      });
    }

    // Add shipping cost
    const shipping = 5.99;
    total += shipping;

    // Get seller from first product
    const firstProduct = await payload.findByID({
      collection: 'products',
      id: typeof items[0].product === 'string' ? items[0].product : items[0].product.id,
    });

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/checkout/cancel`,
      customer_email: req.user.email,
      metadata: {
        buyerId: req.user.id,
        sellerId: typeof firstProduct.seller === 'string' ? firstProduct.seller : firstProduct.seller.id,
        items: JSON.stringify(items),
      },
    });

    // Create order in database
    const order = await payload.create({
      collection: 'orders',
      data: {
        buyer: req.user.id,
        seller: typeof firstProduct.seller === 'string' ? firstProduct.seller : firstProduct.seller.id,
        items: items.map((item) => ({
          product: typeof item.product === 'string' ? item.product : item.product.id,
          quantity: item.quantity,
          price: typeof item.product === 'string' 
            ? (await payload.findByID({ collection: 'products', id: item.product })).price
            : item.product.price,
        })),
        subtotal: total - shipping,
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
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: error.message || 'Checkout failed' });
  }
});

module.exports = router;

