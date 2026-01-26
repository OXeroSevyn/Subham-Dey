import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Subham-Dey', // Required for GitHub Pages project repo
  images: {
    unoptimized: true, // Required for static export unless using a custom loader
  },
};

export default nextConfig;
