import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/portfolio-site',
  assetPrefix: '/portfolio-site',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
