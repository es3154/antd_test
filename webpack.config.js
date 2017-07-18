var path = require('path');
var webpack = require('webpack');
var WebpackMd5Hash = require('webpack-md5-hash');
var getThemeConfig = require('./src/theme.js');

module.exports = {
    entry: {
        main : './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'bulider'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
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
                                    style: true
                                }
                            ],
                            'syntax-dynamic-import'
                        ]
                    }
                }]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader:"less-loader",
                        options:{
                            modifyVars:getThemeConfig()
                        }
                    }]
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks : function(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new WebpackMd5Hash(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ]
};