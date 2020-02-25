const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.json/,
        exclude: /node_modules/,
        use: {
          loader: "json-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
