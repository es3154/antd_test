var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main : './src/main.js'
  },
  output: {
      path: path.resolve(__dirname, 'bulider'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].js'
  },
  module: {
    rules: [
        {
            test: /\.jsx|.js$/,
            // loader: 'babel-loader',
            exclude: /(node_modules)/,
            // query: {
            //     presets: ['es2015', 'react']
            // }
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [['es2015', {modules: false}], 'react'],
                    plugins: ['syntax-dynamic-import']
                }
            }]
        }
    ]
  }
};