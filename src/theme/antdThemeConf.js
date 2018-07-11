/**
 * Created by ddxx on 2018/1/16.
 * antd 自定义主题配置
 */
"use strict";

const defTheme = {
    'primary-color': '#0064B4',
    'link-color': '#0064B4',


};

const redTheme = {
    'primary-color': '#D03B33',
    'link-color': '#D03B33',


};

module.exports = theme => {
    if (theme === 'def') {
        return defTheme;
    } else if (theme == 'red') {
        return redTheme;
    }
}

