const path = require("path");

module.exports = {
  entry: "./src/index2.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./dist/bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
