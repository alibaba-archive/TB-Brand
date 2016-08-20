const webpack = require('webpack')
const path = require('path')

const package = require('./package')
const svgoConfig = require('./svgo.config')
const libraryName = 'tbrand'
const outputFile = package['name'] + '.js'

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
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  }
}

module.exports = config
