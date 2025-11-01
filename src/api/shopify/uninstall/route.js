import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { shop, scriptId } = await request.json();
    
    if (!shop || !scriptId) {
      return NextResponse.json(
        { error: 'Missing shop or script ID' },
        { status: 400 }
      );
    }

    // Delete the script tag
    const deleteResponse = await fetch(`https://${shop}/admin/api/2023-10/script_tags/${scriptId}.json`, {
      method: 'DELETE',
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
        'Content-Type': 'application/json',
      }
    });

    if (!deleteResponse.ok) {
      throw new Error('Failed to delete script tag');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'DeepVision tracking script uninstalled successfully' 
    });

  } catch (error) {
    console.error('Error uninstalling DeepVision:', error);
    return NextResponse.json(
      { error: 'Failed to uninstall DeepVision' },
      { status: 500 }
    );
  }
}
