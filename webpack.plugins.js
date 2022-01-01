const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/assets/'),
        to: isProduction
          ? path.resolve(__dirname, '.webpack/renderer/main_window/assets/')
          : path.resolve(__dirname, '.webpack/renderer/assets/')
      },
    ]
  })
];
