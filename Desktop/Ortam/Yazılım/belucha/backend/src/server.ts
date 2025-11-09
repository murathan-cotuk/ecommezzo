import express from 'express';
import { getPayload } from 'payload';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import configPromise from './payload.config';
import checkoutRouter from './endpoints/checkout';
import webhookRouter from './endpoints/webhook';
import authRouter from './endpoints/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Payload
const start = async () => {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    // API Routes
    app.use('/api/checkout', checkoutRouter);
    app.use('/api/webhook', webhookRouter);
    app.use('/api/auth', authRouter);

    // Payload Admin
    app.use('/admin', payload.router);

    // Health check
    app.get('/health', (req, res) => {
      res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📦 Payload Admin: http://localhost:${PORT}/admin`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

start();

export default app;
