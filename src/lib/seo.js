// SEO utility functions
export const generateStructuredData = (pageData) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ecommezzo",
    "url": "https://ecommezzo.com",
    "logo": "https://ecommezzo.com/Ecommezzo-Logo.png",
    "description": "Professionelle E-Commerce Lösungen, Digital Marketing und Web Design für nachhaltiges Business-Wachstum.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ecommezzo",
      "https://www.instagram.com/ecommezzo"
    ]
  };

  // Add specific page data
  if (pageData) {
    return {
      ...baseStructuredData,
      ...pageData
    };
  }

  return baseStructuredData;
};

export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

export const generateArticleStructuredData = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": "ecommezzo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ecommezzo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ecommezzo.com/Ecommezzo-Logo.png"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified
  };
};

export const generateServiceStructuredData = (service) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "ecommezzo"
    },
    "areaServed": "DE",
    "serviceType": service.type
  };
};
