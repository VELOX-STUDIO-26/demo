/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Use 'export' for production build, 'standalone' for dev
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  distDir: 'dist',
  basePath: isProd ? '/demo' : '',
  assetPrefix: isProd ? '/demo' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
