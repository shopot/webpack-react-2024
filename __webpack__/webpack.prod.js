const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'styles/[contenthash].css',
  }),
];

const prodConfig = {
  mode: 'production',
  target: 'browserslist',
  plugins,
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[contenthash].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: false,
          ecma: 6,
          mangle: true,
          output: {
            beautify: false,
            comments: false,
          },
        },
      }),
    ],
  },
};

module.exports = prodConfig;
