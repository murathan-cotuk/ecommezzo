# DeepVision - Customer Behavior Analytics for Shopify

DeepVision is a comprehensive customer behavior analytics solution designed specifically for Shopify stores. It provides real-time tracking of customer interactions, click analytics, scroll depth measurement, and session time analysis to help store owners optimize their conversion rates.

## 🚀 Features

- **Real-time Customer Behavior Tracking**: Monitor clicks, scrolls, and user interactions
- **Advanced Analytics Dashboard**: Comprehensive insights with beautiful visualizations
- **Shopify Integration**: Seamless installation as a Shopify app
- **SaaS Platform**: Standalone analytics platform for ecommezzo.com
- **Export Capabilities**: Download data in CSV/JSON formats
- **Responsive Design**: Works perfectly on all devices

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB database
- Shopify Partner account (for app development)
- Vercel account (for deployment)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommezzo.git
cd ecommezzo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/deepvision
MONGODB_DB=deepvision

# Shopify App Configuration
SHOPIFY_API_KEY=your-shopify-api-key
SHOPIFY_API_SECRET=your-shopify-api-secret
SHOPIFY_ACCESS_TOKEN=your-shopify-access-token
SHOPIFY_WEBHOOK_SECRET=your-shopify-webhook-secret

# App Configuration
NEXT_PUBLIC_API_URL=https://your-app-domain.com
NEXT_PUBLIC_SHOPIFY_APP_URL=https://your-shopify-app-domain.com

# Authentication
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://your-app-domain.com
```

### 4. Database Setup

```bash
# Start MongoDB (if running locally)
mongod

# The application will automatically create the necessary collections and indexes
```

### 5. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
ecommezzo/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── insight/
│   │   │   │   └── track/          # Main tracking API
│   │   │   └── shopify/             # Shopify app endpoints
│   │   ├── dashboard/
│   │   │   └── deepvision/          # Analytics dashboard
│   │   ├── softwares/              # Software products page
│   │   │   └── deepvision/          # DeepVision landing page
│   │   └── shopify/                 # Shopify app interface
│   ├── components/
│   │   └── softwares/               # Software-related components
│   └── lib/
│       ├── database.js              # Database utilities
│       └── softwaresData.js         # Software metadata
├── shopify.app.toml                 # Shopify app configuration
└── env.example                      # Environment variables template
```

## 🔧 API Endpoints

### Tracking API

**POST** `/api/insight/track`

Tracks customer behavior events.

```json
{
  "shopDomain": "example.myshopify.com",
  "event": "click",
  "data": {
    "element": "BUTTON",
    "text": "Add to Cart",
    "page": "/products/led-lamp"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**GET** `/api/insight/track?shop=example.myshopify.com&days=7`

Retrieves analytics data for a specific shop.

### Shopify App APIs

- **POST** `/api/shopify/install` - Install tracking script
- **GET** `/api/shopify/check-installation` - Check installation status
- **POST** `/api/shopify/uninstall` - Remove tracking script

## 📊 Dashboard Features

### Analytics Dashboard (`/dashboard/deepvision`)

- **Summary Cards**: Total clicks, session time, scroll depth, events
- **Time Series Charts**: Clicks and session time over time
- **Scroll Depth Distribution**: Pie chart showing scroll behavior
- **Top Pages Table**: Performance metrics for each page
- **Real-time Updates**: Live data refresh

### Key Metrics Tracked

1. **Click Analytics**
   - Element interactions
   - Click coordinates
   - Element types and content

2. **Scroll Behavior**
   - Scroll depth percentage
   - Scroll patterns
   - Engagement levels

3. **Session Analytics**
   - Session duration
   - Page time
   - User activity

4. **E-commerce Events**
   - Product interactions
   - Add to cart events
   - Checkout initiation

## 🛒 Shopify App Installation

### 1. Create Shopify App

1. Go to [Shopify Partners](https://partners.shopify.com/)
2. Create a new app
3. Configure the app settings:
   - App URL: `https://your-domain.com/shopify/app`
   - Allowed redirection URLs: `https://your-domain.com/auth/callback`

### 2. Configure App Settings

Update `shopify.app.toml`:

```toml
name = "DeepVision"
client_id = "your-shopify-app-client-id"
application_url = "https://your-app-domain.com"
embedded = true

[access_scopes]
scopes = "write_script_tags,read_orders,read_products"

[auth]
redirect_urls = [
  "https://your-app-domain.com/auth/callback"
]
```

### 3. Deploy to Shopify

```bash
# Install Shopify CLI
npm install -g @shopify/cli

# Login to Shopify
shopify auth login

# Deploy the app
shopify app deploy
```

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/deepvision
SHOPIFY_API_KEY=your-production-api-key
SHOPIFY_API_SECRET=your-production-api-secret
NEXT_PUBLIC_API_URL=https://your-production-domain.com
```

## 📈 Usage

### For Store Owners

1. **Install DeepVision**: Add the app from Shopify App Store
2. **Configure Settings**: Set up tracking preferences
3. **View Analytics**: Access the dashboard to see insights
4. **Optimize Store**: Use data to improve conversion rates

### For Developers

1. **API Integration**: Use the tracking API for custom implementations
2. **Data Export**: Download analytics data for external analysis
3. **Custom Dashboards**: Build custom visualizations using the API

## 🔒 Security

- **Data Privacy**: All tracking data is anonymized
- **GDPR Compliance**: Built-in privacy controls
- **Secure API**: Rate limiting and authentication
- **Data Encryption**: All data encrypted in transit and at rest

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [https://docs.ecommezzo.com](https://docs.ecommezzo.com)
- **Email**: support@ecommezzo.com
- **GitHub Issues**: [https://github.com/your-username/ecommezzo/issues](https://github.com/your-username/ecommezzo/issues)

## 🎯 Roadmap

- [ ] Advanced heatmap visualization
- [ ] A/B testing integration
- [ ] Machine learning insights
- [ ] Mobile app analytics
- [ ] Custom event tracking
- [ ] White-label solutions

---

**Built with ❤️ by the Ecommezzo Team**