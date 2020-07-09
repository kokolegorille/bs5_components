const path = require("path");
const Webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_env, options) => {
  const devMode = options.mode !== 'production';
  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "js/bundle.js",
      publicPath: "/"
    },
    mode: devMode,
    devtool: devMode ? 'source-map' : undefined,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        // Load stylesheet
        {
          test: /\.[s]?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
      ]
    }, 
    resolve: {
      extensions: [".jsx", ".js"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        inject: "body",
      }),
      new MiniCssExtractPlugin({ filename: "./css/app.css" }),
      new Webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      historyApiFallback: true,
      compress: true,
      compress: true,
      open: true,
      hot: true,
      overlay: true,
      port: 9000
    }
  }
};