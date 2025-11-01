import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { shop, accessToken } = await request.json();
    
    if (!shop || !accessToken) {
      return NextResponse.json(
        { error: 'Missing shop or access token' },
        { status: 400 }
      );
    }

    // Create the tracking script
    const trackingScript = `
      (function() {
        window.DeepVision = {
          shop: '${shop}',
          track: function(event, data) {
            fetch('${process.env.NEXT_PUBLIC_API_URL || 'https://ecommezzo.com'}/api/insight/track', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                shopDomain: '${shop}',
                event: event,
                data: data,
                timestamp: new Date().toISOString()
              })
            }).catch(console.error);
          }
        };

        // Track page views
        DeepVision.track('pageview', {
          page: window.location.pathname,
          title: document.title
        });

        // Track clicks
        document.addEventListener('click', function(e) {
          DeepVision.track('click', {
            element: e.target.tagName,
            text: e.target.textContent?.substring(0, 100),
            page: window.location.pathname
          });
        });

        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', function() {
          const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            DeepVision.track('scroll', {
              depth: scrollPercent + '%',
              page: window.location.pathname
            });
          }
        });

        // Track session time
        let sessionStart = Date.now();
        setInterval(function() {
          const sessionTime = Math.round((Date.now() - sessionStart) / 1000);
          DeepVision.track('session_time', {
            time: sessionTime,
            page: window.location.pathname
          });
        }, 30000); // Track every 30 seconds
      })();
    `;

    // Install the script tag in the store
    const scriptTagResponse = await fetch(`https://${shop}/admin/api/2023-10/script_tags.json`, {
      method: 'POST',
      headers: {
        'X-Shopify-Access-Token': accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        script_tag: {
          event: 'onload',
          src: `data:text/javascript;base64,${Buffer.from(trackingScript).toString('base64')}`,
          display_scope: 'online_store'
        }
      })
    });

    if (!scriptTagResponse.ok) {
      throw new Error('Failed to install script tag');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'DeepVision tracking script installed successfully' 
    });

  } catch (error) {
    console.error('Error installing DeepVision:', error);
    return NextResponse.json(
      { error: 'Failed to install DeepVision' },
      { status: 500 }
    );
  }
}
