const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.common')
const { PUBLIC_PATH } = require('./utils')
const FriendlyErrorsWebpackPlugin = require('@nuxtjs/friendly-errors-webpack-plugin')

const ESLintPlugin = require('eslint-webpack-plugin')

// 获取启动端口，默认是 8080
const portArgvIndex = process.argv.indexOf('--port')
let port = portArgvIndex !== -1 ? process.argv[portArgvIndex + 1] : 8081

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  stats: 'errors-only',
  devServer: {
    // static: PUBLIC_PATH,
    // hot: "only", // 防止 error 导致整个页面刷新
    // compress: true, // 开启本地服务器 gzip 压缩
    // historyApiFallback: true, // 防止 history 路由刷新后空白
    // // 配置接口代理
    // proxy: {
    //   "/api": {
    //     target: "https://api.github.com",
    //     pathRewrite: { "^/api": "" },
    //     changeOrigin: true,
    //   },
    // },
    host: '0.0.0.0',
    port,
    static: PUBLIC_PATH,
    hot: 'only', // 防止 error 导致整个页面刷新
    compress: true, // 开启本地服务器 gzip 压缩
    historyApiFallback: true, // 防止 history 路由刷新后空白
    // 配置接口代理
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        // 修改启动后终端显示localhost和network访问地址
        messages: [`Your application is running here: http://localhost:8080`]
      }
    }),
    new ESLintPlugin({
      extensions: ['js', 'ts', 'jsx', 'tsx'],
      emitError: true,
      emitWarning: true,
      failOnError: true
    })
  ]
})
