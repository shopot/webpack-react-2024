const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const { default: merge } = require('webpack-merge');

const createAliases = require('./__webpack__/webpack.alias');

const rootDirectory = path.join(__dirname);
const srcDirectory = path.join(rootDirectory, 'src');
const publicDirectory = path.join(rootDirectory, 'public');
const templateHtmlFile = path.join(srcDirectory, 'index.html'); // path to index.html

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: path.join(srcDirectory, 'index.tsx'),
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: createAliases(srcDirectory),
    fallback: {
      fs: false,
      os: false,
      path: false,
      module: false,
    },
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: templateHtmlFile,
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: publicDirectory,
          globOptions: { ignore: ['*.DS_Store'] },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        exclude: /(node_modules)/,
        loader: 'swc-loader',
        options: {
          module: {
            type: 'es6',
          },
          minify: !isDev,
          isModule: true,
          jsc: {
            minify: {
              compress: true,
              mangle: true,
              format: {
                asciiOnly: true,
                comments: /^ webpack/,
              },
            },
            target: 'esnext',
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
          },
        },
      },
      {
        // For pure CSS - /\.css$/i,
        // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
        // For Less - /\.((c|le)ss)$/i,
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
};

module.exports = merge(
  config,
  isDev ? require('./__webpack__/webpack.dev.js') : require('./__webpack__/webpack.prod.js'),
);
