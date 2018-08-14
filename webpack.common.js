require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
  template: './assets/index.html'
})

module.exports = {
  entry: ['./assets/app/phtt.js'],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(otf|ttf|eot|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  plugins: [
    htmlPlugin
  ],
  resolve: {
    modules: [
      'node_modules',
      'assets/app',
      'assets/styles'
    ]
  },
  node: {
    fs: 'empty'
  }
}
