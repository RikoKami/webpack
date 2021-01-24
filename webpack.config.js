const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
};
