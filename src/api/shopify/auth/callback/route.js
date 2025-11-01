import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const { code, shop } = await request.json();

    if (!code || !shop) {
      return NextResponse.json(
        { error: 'Missing code or shop parameter' },
        { status: 400 }
      );
    }

    // Exchange code for access token
    const tokenResponse = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.SHOPIFY_API_KEY,
        client_secret: process.env.SHOPIFY_API_SECRET,
        code: code
      })
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for access token');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Store the access token securely (in production, use a secure database)
    // For now, we'll return success and handle token storage in the client
    
    return NextResponse.json({
      success: true,
      accessToken: accessToken,
      shop: shop
    });

  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.json(
      { error: 'Failed to complete authentication' },
      { status: 500 }
    );
  }
}
