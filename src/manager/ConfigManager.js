/**
 * Created by ddxx on 2017/8/18.
 */

"use strict";

import { message } from 'antd';
import { registerTheme } from '../theme/echartTheme';
import axios from 'axios';



/**
 * 初始配置
 */
const init = () => {

    confAxios();

    confAntdMessage();

    //注册echarts主题
    registerTheme();

}

//配置axios
const confAxios = () => {

    //设置默认头
    axios.defaults.headers = {'accept':'application/json'};

    axios.interceptors.request.use(config => {
        const url = config.url;
        if (url.indexOf('alarms') > -1) {
            config.params = {
                bearer: 'token',    //这个地方设置token
                ...config.params
            }
        }
        return config;
    }, error => {
        console.error(error);
        return Promise.reject(error);
    });

    //响应结果拦截
    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        console.error(error);
        return Promise.reject(error);
    })
}

/**
 * antd message组件的全局配置
 */
const confAntdMessage = () => {
    message.config({
        top: 100,
        duration: 2
    })
}

/**
 * 初始化配置
 */
const start = async () => {

    init();
}

export const ConfigManager = {
    start
}
