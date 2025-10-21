// Google Analytics utility functions
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Enhanced ecommerce tracking
export const trackPurchase = (transactionId, value, currency = 'EUR', items = []) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  event({
    action: 'click',
    category: 'engagement',
    label: buttonName,
  });
};

// Track page scroll depth
export const trackScrollDepth = (depth) => {
  event({
    action: 'scroll',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
};
