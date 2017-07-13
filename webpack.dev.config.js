var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      main : './src/main.js'
  },
  output: {
      path: path.resolve(__dirname, 'bulider'),
      publicPath: "/assets/",
      filename: '[name].js',
      chunkFilename: '[name].js'
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
            exclude: /(node_modules)/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            'es2015',
                            {modules: false}
                        ],
                        'react',
                        'stage-2'
                    ],
                    plugins: [
                        'transform-runtime',
                        [
                            'import',
                            {
                                libraryName: 'antd',
                                style: 'css' // or true or css 这里必须是 css，否则样式不能加载
                            }
                        ],
                        'syntax-dynamic-import'
                    ]
                }
            }]
        }
    ]
  },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks : function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ],
    devServer: {
        https: true,
        proxy: {
            '/kpi/*': {
                target: 'http://10.87.61.20:8200',
                secure: false
            }
        }
    },
    devtool: 'source-map'   //调试相关
};