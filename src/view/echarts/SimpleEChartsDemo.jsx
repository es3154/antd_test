/**
 * Created by ddxx on 2017/6/26.
 */

import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class SimpleEChartsDemo extends React.Component {

    constructor() {
        super();
        console.log('echartssss');
    }

    render() {
        return (
            <ReactEcharts option={option} style={{height: '600px', width: '100%'}}/>
        );
    }
}

const option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};