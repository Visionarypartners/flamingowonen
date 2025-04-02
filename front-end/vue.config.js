const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '/',
  assetsDir: 'assets', // optional - Vue puts static files here

  chainWebpack: (config) => {
    config.resolve.alias
        .set('@', path.resolve(__dirname, 'src'));
  },

  // Optional: copy static files from public as-is
  configureWebpack: {
    output: {
      assetModuleFilename: 'img/[name][ext][query]' // ensures proper img output
    }
  }
});
