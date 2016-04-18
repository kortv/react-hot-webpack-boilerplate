var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss       = require('precss');

module.exports = {
  devtool: 'source-map',
  entry: [
    './frontend/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle/bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  module: {
    preLoaders: [
      {
        test: /\.js|\.jsx$/,
        loader: 'eslint-loader',
        exclude: ['node_modules']
      }
    ],

    loaders: [
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader")},
      {test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"} 
    ]
  },
  postcss: function () {
      return [autoprefixer, precss];
  },
  plugins: [
    new NpmInstallPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};