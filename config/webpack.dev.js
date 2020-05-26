'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const setting = require('./setting')
const { spawn } = require('child_process')

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: setting.host,
    port: setting.port,
    contentBase: setting.srcPath,
    publicPath: setting.publicPath,
    historyApiFallback: true,
    watchContentBase: true,
    compress: true,
    hot: true,
    clientLogLevel: 'error',
    open: false,
    overlay: false,
    quiet: false,
    noInfo: false,
    watchOptions: {
      ignored: /node_modules/
    },
    before() {
      console.log('Starting Main Process...')
      spawn('npm', ['run', 'start-main'], {
        shell: true,
        env: process.env,
        stdio: 'inherit'
      })
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError))
    },
    proxy: {}
  },
  module: {
    rules: [
      {
        oneOf: []
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    builtAt: false,
    entrypoints: false,
    assets: false,
    version: false
  }
})
