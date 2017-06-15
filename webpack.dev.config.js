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
            test:/\.css$/,
            //exclude:/node_modules/, // 这里千万要注意了，按需加载时，没有样式，这里弄的
            use:[
                "style-loader",
                "css-loader"
            ]
        },
        {
            test: /\.jsx|.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2'],
                plugins: ['transform-runtime', ['import', {
                    libraryName: 'antd',
                    style: 'css' // or true or css 这里必须是 css，否则样式不能加载
                }]]
            }
        }
    ]
  }
};