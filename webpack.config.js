const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'text_bundle.js'
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
            test: /\.css$/,
            loader: 'style-laoder!css-loader?modules=true'
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.html$/,
            use: [ { loader: "html-loader" } ]
        },
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
          },
        },
      ]
    },
    plugins: [
        new htmlwebpackplugin({
            template: './src/index.html'
        })
    ]
  };