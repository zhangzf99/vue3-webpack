const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.common");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const Terser = require("terser-webpack-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: false, // 去除 eval 包裹的代码，方便查看代码
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all", // 支持同步/异步导入的模块，有三个值：initial（同步）、async （异步）、all（所有）
      minSize: 20000, // 生成 chunk 最小体积，单位字节
      minChunks: 1, // 这个模块至少被导入一次就分包
      cacheGroups: {
        // 分组一：针对第三方依赖，会继承前面的配置
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 当同时匹配到两个分组时设置的优先级，值越大优先级越大
          filename: "js/chunk-vendors.[fullhash:8].js",
        },
        // 分组一：针对公共模块，会继承前面的配置
        default: {
          minChunks: 2, // 模块被导入两次进行分包
          priority: -20,
          filename: "js/[name]-common.[fullhash:8].js",
        },
      }, // 提取 chunk 分组
    },
    usedExports: true, // 标记未使用成员
    minimize: true, // “摇”掉未使用成员，并使用下面提供的插件压缩代码
    // 这个选项专门配置代码压缩
    minimizer: [
      // 压缩 js
      new Terser({
        extractComments: false,
      }),
      // 压缩 css
      new CssMinimizerWebpackPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[fullhash:6].css",
    }),
  ],
});
