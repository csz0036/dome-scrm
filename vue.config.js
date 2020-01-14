// const apiMocker = require('@songshupinpin/sspp-api-mocker')
const path = require('path')
let entryMain;

if (process.env.NODE_ENV === 'dev') {
    entryMain = './src/main.dev.js';
} else {
    entryMain = './src/main.js';
}
module.exports = {
  runtimeCompiler: true,
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    port: 9080,
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    // proxy: {
    //   '/shop-operation/newUrl/abc': { // 直连开发电脑
    //     target: `https://java.ip`
    //   }
    // }
  },
  css: {
    // 预处理器 Loader scss全局变量注入
    loaderOptions: {
      sass: {
        // data: `@import "@/assets/scss/_variable.scss";`
      }
    }
  },
  configureWebpack: {
        entry: {
            app: entryMain
        },
        resolve: {
            alias: {
                '@public': path.resolve(__dirname, './gitSubmoduleModule'),
                '@': path.resolve(__dirname, './src'),
            }
        },
    },
  productionSourceMap: false
}
