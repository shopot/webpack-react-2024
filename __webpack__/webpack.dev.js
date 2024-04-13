const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config();

const createProxy = require('./webpack.proxy');

const rootDirectory = path.join(__dirname, '..');

const UI_PORT = process.env.UI_PORT || 3000;

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
];

const devServer = {
  port: UI_PORT,
  host: '0.0.0.0',
  hot: true,
  compress: true,
  client: {
    progress: true,
  },
  allowedHosts: 'all',
  open: true,
  static: { directory: path.join(rootDirectory, 'build') },
  historyApiFallback: true,
  proxy: createProxy(),
};

const devConfig = {
  mode: 'development',
  devServer,
  target: 'web',
  plugins,
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
};

module.exports = devConfig;
