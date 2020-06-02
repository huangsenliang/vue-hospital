// 引入等比适配插件
const path = require('path');

// 使用等比适配插件
module.exports = {
  lintOnSave: true,
  // 配置rem缩放
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue','.less'],  // 自动添加文件名后缀
      alias: {
        'vue': 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    }
  },
  // less配置全局入口文件
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "./src/styles/Main.less"),
      ],
    },
  }
};
