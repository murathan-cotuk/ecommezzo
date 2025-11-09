const express = require('express');
const payload = require('payload');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import custom endpoints
const checkoutRoutes = require('./endpoints/checkout');
const webhookRoutes = require('./endpoints/webhook');
const authRoutes = require('./endpoints/auth');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Payload
const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Custom API routes
  app.use('/api/checkout', checkoutRoutes);
  app.use('/api/webhook', webhookRoutes);
  app.use('/api/auth', authRoutes);

  // Health check
  app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Start server
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📦 Payload Admin: http://localhost:${PORT}/admin`);
  });
};

start();

module.exports = app;

