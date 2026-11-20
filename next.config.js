/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/:path*", destination: "https://imperionglobalholdings.co.ke/:path*", permanent: true, has: [{ type: "host", value: "www.imperionglobalholdings.co.ke" }] },
      { source: "/coffee/current-lots", destination: "/coffee", permanent: true },
      { source: "/coffee/catalog", destination: "/coffee", permanent: true },
      { source: "/how-to-buy", destination: "/export", permanent: true },
      { source: "/buyers", destination: "/coffee", permanent: true },
      { source: "/avocado", destination: "/coffee", permanent: true },
    ];
  },
};

module.exports = nextConfig;
