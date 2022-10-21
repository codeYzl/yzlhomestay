const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验
  lintOnSave: false
})
module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').loader('eslint-loader').tap(opt => {
      opt.emitWarning = opt.emitError = opt.failOnWarning = opt.failOnError = true;
      return opt;
    });
  }
};
const webpack = require("webpack");

module.exports = {
  // 配置插件参数

  configureWebpack: {
    plugins: [
      // 配置 jQuery 插件的参数

      new webpack.ProvidePlugin({
        $: "jquery",

        jQuery: "jquery",

        "window.jQuery": "jquery",

        Popper: ["popper.js", "default"],
      }),
    ],
  },
};

