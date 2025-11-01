export const softwaresData = [
  {
    id: 1,
    name: "DeepVision",
    slug: "deepvision",
    description: "Advanced customer behavior analytics for Shopify stores. Track customer behavior, clicks, scroll depth, and session time to optimize your store's performance.",
    category: "analytics",
    price: 29,
    originalPrice: 49,
    status: "new",
    features: [
      "Real-time customer behavior tracking",
      "Click heatmaps and analytics",
      "Scroll depth measurement",
      "Session time analysis",
      "Custom dashboard with insights",
      "Shopify integration",
      "Export data to CSV/JSON"
    ],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center">
        <img 
          src="/Hero.png" 
          alt="DeepVision Logo" 
          className="w-8 h-8 object-contain"
        />
      </div>
    ),
    demoUrl: "/softwares/deepvision",
    dashboardUrl: "/softwares/deepvision/dashboard"
  },
  /*{
    id: 2,
    name: "AutoResponder Pro",
    slug: "autoresponder-pro",
    description: "Automated email marketing and customer communication system. Send personalized emails, follow-ups, and nurture sequences automatically.",
    category: "automation",
    price: 39,
    originalPrice: null,
    status: "popular",
    features: [
      "Automated email sequences",
      "Customer segmentation",
      "A/B testing for emails",
      "Advanced analytics",
      "Integration with major platforms",
      "Custom email templates",
      "Scheduled campaigns"
    ],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-wine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
    ),
    demoUrl: null
  },
  {
    id: 3,
    name: "SocialSync",
    slug: "socialsync",
    description: "Social media management and automation tool. Schedule posts, analyze performance, and engage with your audience across all platforms.",
    category: "marketing",
    price: 49,
    originalPrice: 69,
    status: "trending",
    features: [
      "Multi-platform posting",
      "Content calendar",
      "Analytics dashboard",
      "Hashtag research",
      "Auto-scheduling",
      "Engagement tracking",
      "Team collaboration"
    ],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 8h6m-6 4h6m-6 4h4" />
          </svg>
        </div>
      </div>
    ),
    demoUrl: null
  },
  {
    id: 4,
    name: "ConversionBoost",
    slug: "conversionboost",
    description: "Conversion rate optimization tool with A/B testing, heatmaps, and user behavior analysis to maximize your store's performance.",
    category: "analytics",
    price: 59,
    originalPrice: 79,
    status: "featured",
    features: [
      "A/B testing framework",
      "Heatmap analysis",
      "User behavior insights",
      "Conversion tracking",
      "ROI optimization",
      "Real-time reporting",
      "Custom experiments"
    ],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      </div>
    ),
    demoUrl: null
  },
  {
    id: 5,
    name: "InventoryMaster",
    slug: "inventorymaster",
    description: "Advanced inventory management system with real-time tracking, automated reordering, and comprehensive reporting for e-commerce businesses.",
    category: "integration",
    price: 79,
    originalPrice: 99,
    status: "new",
    features: [
      "Real-time inventory tracking",
      "Automated reorder points",
      "Multi-warehouse support",
      "Low stock alerts",
      "Supplier management",
      "Cost optimization",
      "Reporting dashboard"
    ],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      </div>
    ),
    demoUrl: null
  },
  {
    id: 6,
    name: "CustomerInsight",
    slug: "customerinsight",
    description: "Customer analytics and segmentation platform that helps you understand your customers better and create targeted marketing campaigns.",
    category: "analytics",
    price: 69,
    originalPrice: 89,
    status: "popular",
    features: [
      "Customer segmentation",
      "Behavioral analytics",
      "Predictive modeling",
      "Churn analysis",
      "Personalization engine",
      "Customer journey mapping",
      "Advanced reporting"
    ],
    icon: (
      <div className="w-8 h-8 flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>
    ),
    demoUrl: null
  }*/
];