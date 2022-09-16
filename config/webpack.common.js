const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { OUTPUT_PATH, PUBLIC_PATH } = require('./utils')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    // 依赖共享模块
    main: { import: './src/entry-vue.ts', dependOn: 'shared' },
    // 依赖共享模块
    // main2: { import: './src/entry-vue.ts', dependOn: 'shared' },
    shared: ['lodash-es']
  },
  output: {
    filename: 'js/[name].js',
    path: OUTPUT_PATH
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[fullhash:4][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[fullhash:4][ext]'
        }
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      template: path.join(PUBLIC_PATH, 'index.html')
    }),
    new DefinePlugin({
      BASE_URL: JSON.stringify('')
    }),
    new VueLoaderPlugin()
  ]
}
