const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.CMS_ASSET_CDN_DOMAIN],
    disableStaticImages: true, // importした画像の型定義設定を無効にする https://zenn.dev/toono_f/articles/bd50ddd0a7bc76
  },
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
