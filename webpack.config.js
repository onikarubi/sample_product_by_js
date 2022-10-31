const path = require('path')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcBase = path.resolve(__dirname, "./src/main.ts");
const outputBase = path.resolve(__dirname, "dist");


module.exports = {
  mode: "development",
  entry: {
    main: srcBase
  },

  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },

  module: {
    rules: [
      {
        test: /\.(css|scss|sass)/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.ts/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".ts"]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/style.css',
    })
  ],

  devServer: {
    static: {
      directory: outputBase,
    },

    open: true,
  }
}


