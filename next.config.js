const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.CMS_ASSET_CDN_DOMAIN],
  },
  i18n,
};

module.exports = nextConfig;
