const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const sharp = require('sharp');

const IMAGE_PATTERN = /\.(jpg|jpeg|png)$/i;
const LOSSLESS_PATTERN = /\.lossless\.(jpg|jpeg|png)$/i;

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'docs'),
      filename: 'bundle.[contenthash].js',
      clean: {
        keep: /CNAME/,
      },
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.[contenthash].css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets/**/*.{jpg,jpeg,png}',
            to({ absoluteFilename }) {
              const relative = path.relative(
                path.resolve(__dirname, 'src/assets'),
                absoluteFilename,
              );
              return path.join('assets', relative)
                .replace(LOSSLESS_PATTERN, '.webp')
                .replace(IMAGE_PATTERN, '.webp');
            },
            transform: async (content, absoluteFrom) => {
              const options = LOSSLESS_PATTERN.test(absoluteFrom)
                ? { lossless: true }
                : { quality: 85 };
              return sharp(content).webp(options).toBuffer();
            },
          },
        ],
      }),
    ],
    optimization: {
      minimizer: [
        '...', // keep default JS minimizer
        new CssMinimizerPlugin(),
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'docs'),
      },
      port: 3000,
      open: true,
      hot: true,
    },
  };
};
