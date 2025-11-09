# Belucha Setup Guide

Complete setup guide for the Belucha e-commerce platform.

## Prerequisites

- Node.js 18 or higher
- MongoDB Atlas account (or local MongoDB)
- Stripe account
- Cloudinary account (optional, for image uploads)

## Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/belucha
PAYLOAD_SECRET=your_random_secret_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_URL=cloudinary://key:secret@cloud_name
PORT=3001
FRONTEND_URL=http://localhost:3000
```

5. Start the backend server:
```bash
npm run dev
```

6. Access Payload CMS admin at `http://localhost:3001/admin`
   - Create your first admin user when prompted

## Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

5. Start the frontend development server:
```bash
npm run dev
```

6. Access the application at `http://localhost:3000`

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user
4. Whitelist your IP address
5. Get your connection string
6. Update `MONGODB_URI` in backend `.env`

## Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the dashboard
3. Update `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` in backend `.env`
4. Update `NEXT_PUBLIC_STRIPE_PUBLIC_KEY` in frontend `.env.local`
5. Set up webhook endpoint in Stripe dashboard:
   - URL: `http://localhost:3001/api/webhook/stripe`
   - Events: `checkout.session.completed`, `payment_intent.payment_failed`

## Cloudinary Setup (Optional)

1. Create a Cloudinary account at https://cloudinary.com
2. Get your Cloudinary URL from the dashboard
3. Update `CLOUDINARY_URL` in backend `.env`

## First Steps

1. Create an admin user via Payload CMS admin panel
2. Create some categories
3. Create products (or register as a seller)
4. Test the checkout flow

## Troubleshooting

- **MongoDB connection error**: Check your connection string and IP whitelist
- **Payload admin not loading**: Ensure `PAYLOAD_SECRET` is set
- **Stripe checkout not working**: Verify API keys are correct
- **CORS errors**: Check `FRONTEND_URL` in backend `.env`

