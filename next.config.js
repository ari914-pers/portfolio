/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.CMS_ASSET_CDN_DOMAIN],
  },
};

module.exports = nextConfig;
