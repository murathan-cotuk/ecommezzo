# Belucha Deployment Guide

Complete deployment guide for the Belucha e-commerce platform.

## Overview

Belucha consists of two main components:
- **Frontend**: Next.js application (deploy to Vercel)
- **Backend**: Node.js + Express + Payload CMS (deploy to Render/Hostinger)

## Frontend Deployment (Vercel)

### Prerequisites
- Vercel account
- GitHub repository

### Steps

1. **Push code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select the `frontend` directory as root directory

3. **Configure Environment Variables**
   - `NEXT_PUBLIC_API_URL`: Your backend API URL
   - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`: Your Stripe public key

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete

5. **Custom Domain (Optional)**
   - Add your custom domain in Vercel settings
   - Update DNS records as instructed

## Backend Deployment (Render)

### Prerequisites
- Render account
- MongoDB Atlas account
- Stripe account

### Steps

1. **Push code to GitHub**
```bash
git push origin main
```

2. **Create Web Service on Render**
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Build Settings**
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

4. **Configure Environment Variables**
   ```
   MONGODB_URI=mongodb+srv://...
   PAYLOAD_SECRET=your_secret_key
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_URL=cloudinary://...
   PORT=10000
   FRONTEND_URL=https://your-frontend.vercel.app
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete

6. **Configure Stripe Webhook**
   - Go to Stripe Dashboard → Webhooks
   - Add endpoint: `https://your-backend.onrender.com/api/webhook/stripe`
   - Select events: `checkout.session.completed`, `payment_intent.payment_failed`
   - Copy webhook secret to environment variables

## Backend Deployment (Hostinger)

### Prerequisites
- Hostinger account with Node.js hosting
- SSH access

### Steps

1. **SSH into server**
```bash
ssh user@your-server.com
```

2. **Clone repository**
```bash
cd /var/www
git clone https://github.com/your-username/belucha.git
cd belucha/backend
```

3. **Install dependencies**
```bash
npm install
```

4. **Create .env file**
```bash
nano .env
# Add all environment variables
```

5. **Build application**
```bash
npm run build
```

6. **Set up PM2**
```bash
npm install -g pm2
pm2 start dist/server.js --name belucha-backend
pm2 save
pm2 startup
```

7. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Set up SSL (Let's Encrypt)**
```bash
sudo certbot --nginx -d api.yourdomain.com
```

## MongoDB Atlas Setup

1. **Create Cluster**
   - Go to MongoDB Atlas
   - Create a new cluster
   - Choose your preferred region

2. **Configure Database**
   - Create database user
   - Whitelist IP addresses (0.0.0.0/0 for production)
   - Get connection string

3. **Update Environment Variables**
   - Update `MONGODB_URI` in backend `.env`

## Post-Deployment Checklist

- [ ] Frontend is accessible
- [ ] Backend API is accessible
- [ ] Payload CMS admin panel is accessible
- [ ] Stripe checkout is working
- [ ] Webhook is configured
- [ ] MongoDB connection is working
- [ ] Environment variables are set correctly
- [ ] SSL certificates are configured
- [ ] Custom domains are configured
- [ ] Error monitoring is set up (optional)

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL

2. **MongoDB Connection Errors**
   - Check IP whitelist in MongoDB Atlas
   - Verify connection string

3. **Stripe Webhook Errors**
   - Verify webhook secret is correct
   - Check webhook endpoint URL

4. **Build Errors**
   - Check Node.js version (should be 18+)
   - Verify all dependencies are installed

## Monitoring

### Recommended Tools
- **Vercel Analytics**: For frontend monitoring
- **Render Dashboard**: For backend monitoring
- **Sentry**: For error tracking (optional)
- **MongoDB Atlas Monitoring**: For database monitoring

## Scaling

### Frontend
- Vercel automatically scales
- Use Vercel Edge Network for global distribution

### Backend
- Upgrade Render plan for more resources
- Use MongoDB Atlas cluster scaling
- Add Redis for caching (optional)

