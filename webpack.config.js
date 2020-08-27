const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      parallel: 2,
    })],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],

  entry: {
    'backoffice-copy-login': './src/backoffice-copy-login.js',
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },

  mode: 'production',
};
