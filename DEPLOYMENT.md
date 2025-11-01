# DeepVision Deployment Guide

This guide covers deploying the DeepVision application to production environments.

## 🚀 Vercel Deployment

### 1. Prerequisites

- Vercel account
- MongoDB Atlas account (or self-hosted MongoDB)
- Shopify Partner account
- GitHub repository

### 2. Environment Setup

#### MongoDB Atlas Setup

1. Create a new cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user with read/write permissions
3. Whitelist your Vercel IP addresses
4. Get your connection string

#### Shopify App Setup

1. Go to [Shopify Partners](https://partners.shopify.com/)
2. Create a new app
3. Configure app settings:
   - App URL: `https://your-domain.vercel.app/shopify/app`
   - Allowed redirection URLs: `https://your-domain.vercel.app/shopify/auth/callback`
4. Get your API key and secret

### 3. Vercel Configuration

#### Environment Variables

Set the following environment variables in your Vercel dashboard:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/deepvision
MONGODB_DB=deepvision

# Shopify App
SHOPIFY_API_KEY=your-shopify-api-key
SHOPIFY_API_SECRET=your-shopify-api-secret
SHOPIFY_ACCESS_TOKEN=your-shopify-access-token
SHOPIFY_WEBHOOK_SECRET=your-shopify-webhook-secret

# App Configuration
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SHOPIFY_APP_URL=https://your-domain.vercel.app

# Authentication
NEXTAUTH_SECRET=your-random-secret-key
NEXTAUTH_URL=https://your-domain.vercel.app
```

#### Deployment Steps

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel
   ```

2. **Configure Domain**
   - Go to Vercel dashboard
   - Add your custom domain
   - Update DNS settings

3. **Set Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add all required variables
   - Redeploy the project

### 4. Database Initialization

The application will automatically create the necessary collections and indexes on first run. However, you can manually initialize:

```javascript
// Run this script to initialize the database
const { initializeDatabase } = require('./src/lib/database');
initializeDatabase();
```

## 🐳 Docker Deployment

### 1. Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### 2. Create docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/deepvision
      - NEXTAUTH_SECRET=your-secret
    depends_on:
      - mongo

  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

### 3. Deploy with Docker

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## ☁️ AWS Deployment

### 1. Using AWS Amplify

1. Connect your GitHub repository to AWS Amplify
2. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. Set environment variables in Amplify console
4. Deploy

### 2. Using AWS ECS

1. Create a Docker image
2. Push to ECR
3. Create ECS task definition
4. Deploy to ECS cluster

## 🔧 Production Optimizations

### 1. Performance

- Enable Next.js production optimizations
- Use CDN for static assets
- Implement caching strategies
- Optimize database queries

### 2. Security

- Use HTTPS everywhere
- Implement rate limiting
- Add CORS configuration
- Secure environment variables
- Regular security updates

### 3. Monitoring

- Set up error tracking (Sentry)
- Monitor performance (Vercel Analytics)
- Database monitoring
- Uptime monitoring

## 📊 Analytics Setup

### 1. Vercel Analytics

```javascript
// Add to your app
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### 2. Custom Analytics

```javascript
// Track custom events
const trackEvent = (event, data) => {
  fetch('/api/analytics/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event, data })
  });
};
```

## 🚨 Troubleshooting

### Common Issues

1. **MongoDB Connection Issues**
   - Check connection string
   - Verify network access
   - Check authentication

2. **Shopify App Issues**
   - Verify app configuration
   - Check OAuth settings
   - Validate webhook URLs

3. **Build Failures**
   - Check environment variables
   - Verify dependencies
   - Check build logs

### Debug Commands

```bash
# Check environment variables
vercel env ls

# View deployment logs
vercel logs

# Test API endpoints
curl -X POST https://your-domain.vercel.app/api/insight/track \
  -H "Content-Type: application/json" \
  -d '{"shopDomain":"test.myshopify.com","event":"test","data":{}}'
```

## 🔄 CI/CD Pipeline

### GitHub Actions

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📈 Scaling

### Horizontal Scaling

- Use multiple Vercel instances
- Implement load balancing
- Use CDN for static assets
- Database sharding

### Vertical Scaling

- Upgrade Vercel plan
- Optimize database queries
- Implement caching
- Use edge functions

---

For more detailed deployment instructions, refer to the [Vercel Documentation](https://vercel.com/docs) and [Next.js Deployment Guide](https://nextjs.org/docs/deployment).
