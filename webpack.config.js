const webpack = require('webpack')
const path = require('path')

const package = require('./package')
const svgoConfig = require('./svgo.config')
const libraryName = package['name']
const outputFile = libraryName + '.js'

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|svg)$/,
        loader: 'base64-loader'
      },
      {
        test: /\.svg$/,
        loaders: [
          'svgo-loader?' + JSON.stringify(svgoConfig)
        ]
      }
    ]
  },
  resolveLoader: {
    alias: {
      "base64-loader": path.join(__dirname, "./loaders/base64-loader")
    }
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
}

module.exports = config
