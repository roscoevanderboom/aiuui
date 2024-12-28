/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const internalHost = process.env.TAURI_DEV_HOST || 'localhost';

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  output: 'export',
  distDir: "../dist",
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
}

module.exports = nextConfig;
