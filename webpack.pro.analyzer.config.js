const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseConf = require('./webpack.base.config');

const proConf = () => {

    const plugins = [
        new CleanWebpackPlugin(['dist']),
        new WebpackMd5Hash(),
        new MiniCssExtractPlugin({
            filename: `def_[id].css`,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            },
            'PUBLICPATH': JSON.stringify('/'),
        }),
        new HtmlWebpackPlugin({
            'title':'',
            'template':'index.template.html'
        }),
        new BundleAnalyzerPlugin()
    ];


    return {
        output: {
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
                    vendor: {
                        name: 'vendor',
                        chunks: 'async',
                        priority: -10,
                        reuseExistingChunk: false,
                        test: /[\\/]node_modules[\\/]/
                    },
                    styles: {
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