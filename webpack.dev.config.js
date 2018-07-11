const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConf = require('./webpack.base.config');



const devConf = () => {

    return {
        mode: 'development',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ],
        devServer: {
            https: false,
            port: 7777, // 端口
            host: 'localhost',
            overlay: true,
            compress: true, // 服务器返回浏览器的时候是否启动gzip压缩
            historyApiFallback: true,
            open: true,
            proxy: {
                '/kpi/*': {
                    target: 'http://10.33.31.12:8200',
                }
            }
        },
        devtool: 'eval-source-map'   //调试相关
    }


}

module.exports = env =>{
    env.devMode = true;
    return merge(baseConf(env), devConf());
}