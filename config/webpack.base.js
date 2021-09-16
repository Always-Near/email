'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const setting = require('./setting')

module.exports = {
  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom'] // 不变的代码分包
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: setting.assetsRoot
  },
  target: 'electron-renderer',
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '~': `${setting.srcPath}/`
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [setting.appPath],
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: true,
          // 是否自动修复
          fix: true
        }
      },
      {
        oneOf: [
          {
            test: /\.(j|t)sx?$/,
            include: setting.srcPath,
            exclude: /node_modules/,
            use: [
              {
                loader: 'Happypack/loader',
                options: { id: 'happypack-babel' }
              },
              {
                loader: 'awesome-typescript-loader',
                options: {
                  silent: true
                }
              }
            ]
          },
          {
            test: /\.css$/,
            include: setting.srcPath,
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it uses publicPath in webpackOptions.output
                  hmr: process.env.NODE_ENV === 'development'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    mode: 'local',
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                  }
                }
              }
            ]
          },
          // {
          //   test: /\.sass$/,
          //   use: [
          //     {
          //       loader: 'style-loader'
          //     },
          //     {
          //       loader: 'css-loader'
          //     },
          //     {
          //       loader: 'sass-loader',
          //       options: {
          //         outputStyle: 'expanded',
          //         indentedSyntax: true
          //       }
          //     }
          //   ]
          // },
          // {
          //   test: /\.scss$/,
          //   use: [
          //     {
          //       loader: 'style-loader'
          //     },
          //     {
          //       loader: 'css-loader'
          //     },
          //     {
          //       loader: 'sass-loader',
          //       options: {
          //         outputStyle: 'expanded'
          //       }
          //     }
          //   ]
          // },
          // {
          //   test: /\.less$/,
          //   use: [
          //     {
          //       loader: MiniCssExtractPlugin.loader,
          //       options: {
          //         // you can specify a publicPath here
          //         // by default it uses publicPath in webpackOptions.output
          //         hmr: process.env.NODE_ENV === 'development'
          //       }
          //     },
          //     {
          //       loader: 'css-loader',
          //       options: {
          //         modules: {
          //           mode: 'local',
          //           localIdentName: '[path][name]__[local]--[hash:base64:5]'
          //         }
          //       }
          //     },
          //     'less-loader'
          //   ]
          // },
          // {
          //   test: /\.styl/,
          //   use: ['style-loader', 'css-loader', 'stylus-loader']
          // },
          {
            test: /\.(png|jpg|gif|jpeg|bmp|webp|woff|woff2)$/,
            include: setting.srcPath,
            exclude: /node_modules/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          },
          {
            test: /\.svg$/,
            include: setting.srcPath,
            exclude: /node_modules/,
            use: ['@svgr/webpack']
          },
          {
            test: /\.(mp4|ogg|svg)$/,
            include: setting.srcPath,
            exclude: /node_modules/,
            use: ['file-loader']
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: setting.templatePath,
      showErrors: true
    }),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happypack-babel',
      //如何处理  用法和loader 的配置一样
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react', // jsx支持
              '@babel/preset-env' // 按需使用polyfill
            ],
            cacheDirectory: true // 加快编译速度
          }
        }
      ],
      //允许 HappyPack 输出日志
      verbose: true
    }),
    // css分离
    new MiniCssExtractPlugin({ filename: 'css/[name].[hash:8].css' })
    // Visualize size of webpack output files with an interactive zoomable treemap.
    // new BundleAnalyzerPlugin()
  ]
}
