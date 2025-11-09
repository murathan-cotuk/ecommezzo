# Belucha Quick Start Guide

Get Belucha up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- Stripe account (for payments)

## Step 1: Clone Repository

```bash
git clone https://github.com/murathan-cotuk/belucha.git
cd belucha
```

## Step 2: Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/belucha
PAYLOAD_SECRET=your_random_secret_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
JWT_SECRET=your_jwt_secret_key
PORT=3001
FRONTEND_URL=http://localhost:3000
```

Start backend:

```bash
npm run dev
```

Access Payload CMS admin at: `http://localhost:3001/admin`

## Step 3: Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

Start frontend:

```bash
npm run dev
```

Access application at: `http://localhost:3000`

## Step 4: Create First Admin User

1. Go to `http://localhost:3001/admin`
2. Click "Create First User"
3. Fill in your admin credentials
4. Save

## Step 5: Create Your First Product

1. Log in to Payload CMS admin
2. Go to Products collection
3. Click "Create New"
4. Fill in product details
5. Save

## Step 6: Test the Application

1. Visit `http://localhost:3000`
2. Browse products
3. Add products to cart
4. Test checkout (use Stripe test card: 4242 4242 4242 4242)

## That's It!

You're now ready to use Belucha. For more details, see:
- [Setup Guide](./SETUP.md)
- [API Documentation](./API.md)
- [Deployment Guide](./DEPLOYMENT.md)


