var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main : './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'bulider'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.jsx|.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }
    ]
  }
};