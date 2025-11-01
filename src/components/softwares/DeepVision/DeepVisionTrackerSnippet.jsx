"use client";

import { useEffect, useState } from 'react';

export default function DeepVisionTrackerSnippet({ shopDomain, apiUrl }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize DeepVision tracking
    if (typeof window !== 'undefined' && shopDomain) {
      window.DeepVision = {
        shop: shopDomain,
        apiUrl: apiUrl || process.env.NEXT_PUBLIC_API_URL || 'https://ecommezzo.com',
        track: function(event, data) {
          fetch(`${this.apiUrl}/api/insight/track`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              shopDomain: this.shop,
              event: event,
              data: data,
              timestamp: new Date().toISOString()
            })
          }).catch(console.error);
        }
      };

      // Track page views
      window.DeepVision.track('pageview', {
        page: window.location.pathname,
        title: document.title,
        referrer: document.referrer,
        userAgent: navigator.userAgent
      });

      // Track clicks
      document.addEventListener('click', function(e) {
        const target = e.target;
        const element = {
          tagName: target.tagName,
          className: target.className,
          id: target.id,
          text: target.textContent?.substring(0, 100),
          href: target.href,
          type: target.type
        };

        window.DeepVision.track('click', {
          element: element,
          page: window.location.pathname,
          x: e.clientX,
          y: e.clientY
        });
      });

      // Track scroll depth
      let maxScroll = 0;
      let scrollTimeout;
      
      const trackScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          window.DeepVision.track('scroll', {
            depth: scrollPercent + '%',
            page: window.location.pathname
          });
        }
      };

      window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(trackScroll, 100);
      });

      // Track session time
      let sessionStart = Date.now();
      let lastActivity = Date.now();
      
      const trackSessionTime = () => {
        const sessionTime = Math.round((Date.now() - sessionStart) / 1000);
        window.DeepVision.track('session_time', {
          time: sessionTime,
          page: window.location.pathname
        });
      };

      // Track every 30 seconds
      setInterval(trackSessionTime, 30000);

      // Track user activity
      const updateActivity = () => {
        lastActivity = Date.now();
      };

      ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, updateActivity, true);
      });

      // Track form interactions
      document.addEventListener('submit', function(e) {
        const form = e.target;
        window.DeepVision.track('form_submit', {
          formId: form.id,
          formClass: form.className,
          page: window.location.pathname
        });
      });

      // Track form field focus
      document.addEventListener('focus', function(e) {
        const target = e.target;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
          window.DeepVision.track('form_focus', {
            fieldType: target.type || target.tagName,
            fieldName: target.name,
            page: window.location.pathname
          });
        }
      }, true);

      // Track external links
      document.addEventListener('click', function(e) {
        const target = e.target.closest('a');
        if (target && target.hostname !== window.location.hostname) {
          window.DeepVision.track('external_link', {
            url: target.href,
            text: target.textContent?.substring(0, 100),
            page: window.location.pathname
          });
        }
      });

      // Track product interactions (for Shopify stores)
      document.addEventListener('click', function(e) {
        const target = e.target;
        const productElement = target.closest('[data-product-id], .product-item, .product-card');
        
        if (productElement) {
          const productId = productElement.getAttribute('data-product-id') || 
                           productElement.querySelector('[data-product-id]')?.getAttribute('data-product-id');
          
          if (productId) {
            window.DeepVision.track('product_interaction', {
              productId: productId,
              action: 'click',
              page: window.location.pathname
            });
          }
        }
      });

      // Track add to cart events
      document.addEventListener('click', function(e) {
        const target = e.target;
        const addToCartButton = target.closest('[data-add-to-cart], .btn-cart, .add-to-cart, [name="add"]');
        
        if (addToCartButton) {
          const productId = addToCartButton.getAttribute('data-product-id') || 
                           addToCartButton.closest('[data-product-id]')?.getAttribute('data-product-id');
          
          window.DeepVision.track('add_to_cart', {
            productId: productId,
            page: window.location.pathname
          });
        }
      });

      // Track checkout events
      document.addEventListener('click', function(e) {
        const target = e.target;
        const checkoutButton = target.closest('[data-checkout], .checkout, [name="checkout"]');
        
        if (checkoutButton) {
          window.DeepVision.track('checkout_initiated', {
            page: window.location.pathname
          });
        }
      });

      setIsLoaded(true);
    }
  }, [shopDomain, apiUrl]);

  // Return a visual indicator for development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-50">
        DeepVision {isLoaded ? '✅' : '⏳'}
      </div>
    );
  }

  return null;
}
