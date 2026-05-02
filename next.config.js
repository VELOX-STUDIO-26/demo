/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? '/demo' : '',
  assetPrefix: isProd ? '/demo' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
