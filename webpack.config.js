const path = require('path');

module.exports = {
  entry: {
    index: './app/index.js'
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{}]
  }
};
