var path = require('path');
var webpack = require('webpack');
var precss       = require('precss');
var NpmInstallPlugin = require('npm-install-webpack-plugin');


module.exports = {
  devtool: ['source-map', 'eval'],
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle/bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js|\.jsx$/,
        loader: 'eslint-loader',
        exclude: ['node_modules']
      }
    ],
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/
    }, {
      test: /\.scss$|\.css$/,
      loaders: ["style-loader", "css-loader?sourceMap!postcss-loader"]
    }]
  }
};
