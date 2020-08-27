// const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  optimization: {
    minimize: false,
    // minimizer: [new TerserPlugin({
    //   parallel: 2,
    // })],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-arrow-functions',
            ],
          },
        },
        {
          loader: 'string-replace-loader',
          options: {
            search: '(function () {',
            // eslint-disable-next-line no-script-url
            replace: 'blabla',
            strict: false,
          },
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
    // test: './src/test.js',
  },

  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },

  mode: 'production',
};
