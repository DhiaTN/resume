var webpack = require('webpack');
var WebpackStripLoader = require('strip-loader');
var Config = require("./webpack.config.js");

Config.devtool = 'cheap-module-source-map';
Config.module.loaders.push({
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log')
});
Config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {warnings: false,}
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];

module.exports = Config;