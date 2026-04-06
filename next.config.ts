import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
