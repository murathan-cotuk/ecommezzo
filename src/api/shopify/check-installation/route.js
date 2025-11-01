import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const shop = searchParams.get('shop');
    
    if (!shop) {
      return NextResponse.json(
        { error: 'Missing shop parameter' },
        { status: 400 }
      );
    }

    // Check if script tag exists
    const scriptTagsResponse = await fetch(`https://${shop}/admin/api/2023-10/script_tags.json`, {
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      }
    });

    if (!scriptTagsResponse.ok) {
      return NextResponse.json({ installed: false });
    }

    const scriptTags = await scriptTagsResponse.json();
    const deepVisionScript = scriptTags.script_tags.find(script => 
      script.src.includes('DeepVision') || script.src.includes('data:text/javascript')
    );

    return NextResponse.json({ 
      installed: !!deepVisionScript,
      scriptId: deepVisionScript?.id 
    });

  } catch (error) {
    console.error('Error checking installation:', error);
    return NextResponse.json({ installed: false });
  }
}
