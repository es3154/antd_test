const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const antDThemeConf = require('./src/theme/antdThemeConf.js');

module.exports = (env) => {

    const { devMode, theme } =  env;

    return {
        output: {
            publicPath: "/",
            filename: '[name].js',
            chunkFilename: '[name].js'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias: {
                'assets': path.resolve(__dirname, 'src/assets'),
                'core': path.resolve(__dirname, 'src/core'),
                'manager': path.resolve(__dirname, 'src/manager'),
                'view': path.resolve(__dirname, 'src/view'),
                'utils': path.resolve(__dirname, 'src/utils'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx|.js$/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    'env',
                                    {
                                        "targets": {
                                            "chrome": 60,
                                            "browsers": ["last 2 versions"]
                                        },
                                        "modules": false,
                                    },
                                ],
                                'react',
                                'stage-2'
                            ],
                            plugins: [
                                'transform-decorators-legacy',
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
                    test: /\.(png|jpg|gif|ico|ttf|woff|eot)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 8192,
                                name: "images/[name].[hash:8].[ext]"
                            }
                        }
                    ]
                },
                {
                    test:/\.less/,
                    use: [
                        devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options:{
                                javascriptEnabled: true,
                                modifyVars:antDThemeConf(theme)
                            }
                        }
                    ],
                },
                {
                    test:/\.scss$/,
                    use: [
                        devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: `./src/theme/_${theme}.scss`
                            }
                        }
                    ],
                },
                {
                    test:/\.css$/,
                    use: [
                        devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                        'css-loader'
                    ],
                }
            ]
        },
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/),
        ]
    }
}