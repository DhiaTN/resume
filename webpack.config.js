var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.join(__dirname, 'assets/js');
var SOURCE_DIR = path.join(__dirname, 'src');

module.exports = {
  devtool: 'eval',
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    watch: true
  },
  context: SOURCE_DIR,
  entry: './main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /(node_modules|assets)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
};
