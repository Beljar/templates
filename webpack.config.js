const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/js/main.js')
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname ,'./dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/i,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWaring: false
        }
      },
      {
        test: /\.js$/i,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}