const merge = require('webpack-merge');

module.exports = merge.smart(require('./webpack.config.base.js'), {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ],
  }
});
