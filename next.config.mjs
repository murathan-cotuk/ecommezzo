/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // React hata tespiti için sıkı mod
    compiler: {
      styledComponents: true, // styled-components desteği
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.prod.website-files.com",
        },
        {
          protocol: "https",
          hostname: "your-image-source.com", // Gerekiyorsa ek uzak resim kaynağı
        },
      ],
      formats: ['image/webp', 'image/avif'],
      minimumCacheTTL: 60,
    },
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Frame-Options", value: "DENY" }, // Güvenlik için iframe engeli
            { key: "X-Content-Type-Options", value: "nosniff" }, // MIME türü koruması
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // Referrer koruması
            { key: "X-DNS-Prefetch-Control", value: "on" },
            { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          ],
        },
        {
          source: "/sitemap.xml",
          headers: [
            { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
          ],
        },
        {
          source: "/robots.txt",
          headers: [
            { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
          ],
        },
      ];
    },
    poweredByHeader: false,
    compress: true,
  };
  
  export default nextConfig;
  