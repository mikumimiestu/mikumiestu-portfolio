/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      {
        loader: 'default',
        options: {
          timeout: 20000, // Increased timeout to 20 seconds
        },
      },
    ],
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;