const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/"),
    publicPath: "/",
  },
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader", 
            options: {
              sourceMap: true
            }
          }, 
          {
            loader: "sass-loader", 
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};