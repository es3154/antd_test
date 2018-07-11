const webpack = require('webpack');
const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const baseConf = require('./webpack.base.config');

const proConf = env => {

    const {clean, theme} = env;

    const plugins = [
        new WebpackMd5Hash(),
        new MiniCssExtractPlugin({
            filename: `${theme}_[id].css`,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
        }),
        new CompressionWebpackPlugin({ //gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 409600,  //压缩大于400k的文件
            minRatio: 0.8,
            deleteOriginalAssets: true //删除原始文件
        }),
        new HtmlWebpackPlugin({
            'title':'',
            'template':'index.template.html'
        })
    ];

    if (clean) {
        const cleanFiles = server === 'local' ? ['server/public/*.js', 'server/public/images'] : ['dist'];
        plugins.unshift(new CleanWebpackPlugin(cleanFiles))
    }


    return {
        output: {
            path: outputPath,
            publicPath: publicPath,
            filename: '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].js'
        },
        mode: 'production',

        optimization: {
            runtimeChunk: {
                name: 'manifest'
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: false,
                    uglifyOptions: {
                        compress: {
                            drop_console: true
                        }
                    }
                }),
                new OptimizeCSSAssetsPlugin({})  // use OptimizeCSSAssetsPlugin
            ],
            splitChunks: {
                chunks: 'async',
                minSize: 30000,
                minChunks: 1,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                name: false,
                cacheGroups: {
                    vendor: {        //提取公共包
                        name: 'vendor',
                        chunks: 'async',
                        priority: -10,
                        reuseExistingChunk: false,
                        test: /[\\/]node_modules[\\/]/
                    },
                    styles: {            //提取css
                        name: 'styles',
                        test: /\.(less|scss|css)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },

        plugins: plugins
    }
}

module.exports = env =>{
    env.devMode = false;
    return merge(baseConf(env), proConf(env));
}