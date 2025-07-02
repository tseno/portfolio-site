import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(isGitHubPages && {
    basePath: '/portfolio-site',
    assetPrefix: '/portfolio-site',
  }),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
