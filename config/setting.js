'use strict'

const path = require('path')
const os = require('os')

const srcPath = path.join(__dirname, '../src')
const appPath = path.join(__dirname, '../')
const assetsRoot = path.join(__dirname, '../dist')
const port = 8080
const host = '0.0.0.0'
const publicPath = '/'
const templatePath = path.join(srcPath, 'index.html')
const faviconPath = path.join(srcPath, 'favicon.ico')
const cpuSize = os.cpus().length

module.exports = {
  srcPath,
  appPath,
  assetsRoot,
  publicPath,
  templatePath,
  faviconPath,
  port,
  host,
  cpuSize
}
