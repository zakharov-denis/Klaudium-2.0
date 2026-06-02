/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-page",
        permanent: false
      },
      {
        source: "/terms",
        destination: "/terms-of-use",
        permanent: false
      }
    ];
  }
};

export default nextConfig;
