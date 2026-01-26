import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export unless using a custom loader
  },
  // If deploying to a project page (e.g. username.github.io/repo-name), 
  // you might need to uncomment and set the basePath:
  // basePath: '/your-repo-name',
};

export default nextConfig;
