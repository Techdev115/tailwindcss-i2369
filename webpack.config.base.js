const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  stats: 'minimal',
  performance: {
    hints: false
  },
  output: {
    filename: '[name]-[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          outputPath: 'assets/images',
          esModule: false,
          limit: 8192,
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts',
        },
      },
      {
        test: /\.css$/i,
        use: [
          'css-loader',
          'postcss-loader',
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin({
      prefix: 'assets/',
      logo: './src/img/logo.png',
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          firefox: false,
          windows: false,
          yandex: false,
        }
      }
    }),
    new HtmlWebpackPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      template: './src/index.html',
    }),
  ],
};
