const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');

// god damn sass imports...
const bourbon = require('bourbon').includePaths;
const neat = require('bourbon-neat').includePaths;

module.exports = {
    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[chunkhash].[id].chunk.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
              "style-loader",
            {
              loader: "css-loader",
              options: {  
                modules: true,
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  bourbon, neat
                ]
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif|mp4|mov)$/,
          use: [
          'file-loader'
          ]
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
        }),
        new WebpackMd5Hash()
    ],
    devtool: 'source-map'
};