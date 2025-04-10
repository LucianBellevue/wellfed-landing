import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['api.dicebear.com'],
  },
};

export default nextConfig;
