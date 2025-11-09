# Belucha - Multi-Vendor E-Commerce Platform

A complete, production-ready, multilingual, multi-vendor e-commerce platform built with Next.js, Payload CMS, and Stripe.

## 🚀 Features

- **Multi-Vendor Support**: Sellers can register, list products, manage inventory & orders
- **Customer Portal**: Browse products, add to cart, checkout, and track orders
- **Admin Dashboard**: Manage all users, products, and categories via Payload CMS
- **Multilingual**: Support for English (EN) and German (DE)
- **SEO-Friendly**: Optimized for search engines with SSR/SSG
- **Stripe Integration**: Secure payment processing
- **Responsive Design**: Modern, animated UI with TailwindCSS and Framer Motion
- **Image CDN**: Cloudinary integration for optimized image delivery

## 🏗️ Architecture

```
/belucha/
├── /frontend/          → Next.js (App Router)
│   ├── /src/
│   │   ├── /app/       → Pages (shop, product, cart, checkout, account, seller)
│   │   ├── /components/ → Shared UI components
│   │   ├── /templates/  → Product & category templates
│   │   ├── /context/    → Auth, Cart, Seller state
│   │   ├── /lib/        → API handlers, hooks
│   │   ├── /i18n/       → Translation files (en.json, de.json)
│   │   └── /styles/     → Tailwind + custom CSS
│
├── /backend/           → Node.js + Express + Payload CMS
│   ├── /src/
│   │   ├── /collections/ → Users, Products, Categories, Orders, Reviews, Pages
│   │   ├── /endpoints/   → /checkout, /webhook, /auth
│   │   ├── /middleware/  → Auth, role check
│   │   └── server.ts     → Express + Payload setup
│
└── /docs/              → Documentation
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express, Payload CMS, MongoDB
- **Payment**: Stripe
- **Auth**: JWT + bcrypt
- **i18n**: next-intl
- **Forms**: React Hook Form + Zod
- **Image**: Cloudinary

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- MongoDB Atlas account
- Stripe account
- Cloudinary account (optional)

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
# Edit .env.local with your API URL and Stripe public key
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)

```env
MONGODB_URI=mongodb+srv://...
PAYLOAD_SECRET=your_secret_key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
JWT_SECRET=your_jwt_secret
CLOUDINARY_URL=cloudinary://...
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_test_...
```

## 🚀 Usage

1. **Access Admin Panel**: `http://localhost:3001/admin`
2. **Create Admin User**: First run will prompt you to create an admin user
3. **Add Products**: Use the admin panel or seller dashboard
4. **Shop**: Visit `http://localhost:3000` to browse products

## 👥 User Roles

- **Admin**: Full access via Payload CMS dashboard
- **Seller**: Add/edit/delete own products, manage orders
- **Customer**: Browse, add to cart, checkout, write reviews

## 📝 API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `POST /api/checkout/create-session` - Create Stripe checkout session
- `POST /api/webhook/stripe` - Stripe webhook handler

## 🧪 Testing

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 📚 Documentation

See `/docs` folder for detailed documentation:
- [Quick Start Guide](./docs/QUICKSTART.md) - Get started in 5 minutes
- [Setup Guide](./docs/SETUP.md) - Detailed setup instructions
- [API Documentation](./docs/API.md) - API endpoints reference
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production deployment

## 🚢 Deployment

### Frontend (Vercel)

```bash
cd frontend
vercel deploy
```

### Backend (Render/Hostinger)

1. Push code to GitHub
2. Connect to Render/Hostinger
3. Set environment variables
4. Deploy

## 📄 License

ISC License - See [LICENSE](./LICENSE) file for details

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a list of changes.

## 👤 Author

Belucha Development Team

## 🙏 Acknowledgments

- Payload CMS
- Next.js Team
- Stripe
- TailwindCSS

