const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-outline"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "staticDirs": ["public"],
  "babel": async options => ({
    ...options,
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
    ]
  }),
  "webpackFinal": async (config) => {
    config.resolve.plugins = [
      new TsConfigPathPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      })
    ]
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/utils": path.resolve(__dirname, "../src/utils"),
      "@/consts": path.resolve(__dirname, "../src/consts"),
      "@/config": path.resolve(__dirname, "../src/config"),
    };

    return config
  },
  features: {
    previewMdx2: true,
  }
}