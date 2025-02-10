/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // React hata tespiti için sıkı mod
  experimental: {
    metadata: true, // Metadata yönetimini etkinleştir
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
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" }, // Güvenlik için iframe engeli
          { key: "X-Content-Type-Options", value: "nosniff" }, // MIME türü koruması
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // Referrer koruması
        ],
      },
    ];
  },
};

export default nextConfig;
