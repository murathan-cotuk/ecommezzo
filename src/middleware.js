import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Handle Shopify app authentication
  if (pathname.startsWith('/shopify/')) {
    const shop = request.nextUrl.searchParams.get('shop');
    
    if (!shop && !pathname.includes('/auth/')) {
      return NextResponse.redirect(new URL('/shopify/auth', request.url));
    }
  }

  // Handle API rate limiting
  if (pathname.startsWith('/api/insight/track')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Basic rate limiting (in production, use Redis or similar)
    const rateLimitKey = `rate_limit_${ip}`;
    // Implementation would go here with Redis
    
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/shopify/:path*',
    '/api/insight/:path*',
    '/dashboard/:path*'
  ]
};
