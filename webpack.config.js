const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: {
    index: './app/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8030,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
    },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPluginConfig],
};
