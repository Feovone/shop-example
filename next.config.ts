import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/shop-example' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'susetti.pl',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
