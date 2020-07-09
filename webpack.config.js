const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_env, options) => {
  const devMode = options.mode !== 'production';
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist", "js"),
      filename: "bundle.js"
    },
    mode: devMode,
    devtool: devMode ? 'source-map' : undefined,
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }]
    }, resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        inject: "body",
      }),
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