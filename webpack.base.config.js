const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {

    const { devMode } =  env;

    return {

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            alias: {
                'assets': path.resolve(__dirname, 'src/assets'),
                'core': path.resolve(__dirname, 'src/core'),
                'manager': path.resolve(__dirname, 'src/manager'),
                'view': path.resolve(__dirname, 'src/view'),
                'utils': path.resolve(__dirname, 'src/utils'),
                'hooks': path.resolve(__dirname, 'src/hooks'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    "@babel/typescript",
                                    '@babel/preset-react'
                                ],
                                plugins: [
                                    "@babel/proposal-class-properties",
                                    "@babel/proposal-object-rest-spread",
                                    '@babel/plugin-transform-runtime',
                                    '@babel/plugin-syntax-dynamic-import',
                                    [
                                        'import',
                                        {
                                            libraryName: 'antd',
                                            libraryDirectory: 'es',
                                            style: true
                                        },
                                        'antd'
                                    ],
                                ]
                            }
                        },
                    ]
                },
                {
                    test:/\.less$/,
                    use: [
                        devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options:{
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        }
                    ],
                },
                {
                    test: /\.(png|jpg|gif|ttf|woff|eot|svg)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 8192,
                                name: "images/[name].[hash:12].[ext]"
                            }
                        }
                    ]
                },
                {
                    test:/\.css$/,
                    use: [
                        devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                }
            ]
        },
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/),
        ]
    }
}