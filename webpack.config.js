const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV, //, 'production''development'
  module: {
    rules: [
      {
        test: /\.jsx?/,   //.(js|jsx)$
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      { 
        test: /\.s[ac]ss$/i, 
        use: ['style-loader', 'css-loader', 'sass-loader']// MiniCssExtractPlugin better than style-loader,
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({template: './index.html'})],// new MiniCssExtractPlugin()
  devServer: {
    static: {     //this static is very new and is required to nest publicPath
      publicPath: '/build/',
    },
    port: 8080,
    proxy: {
      '/api': 'localhost:3000',
    },
  },
};
//devServer saves /build/ folder (and bundle.js in this folder) and saves in RAM