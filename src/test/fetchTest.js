/**
 * Created by ddxx on 2017/7/4.
 */
"use strict";
import 'whatwg-fetch';

const myTest = () => {
    const url = '/kpi/scene/hspeed/trend';
    fetch(url,{
        method: 'post',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify({
            "kpiGroupCode":"PM_TC_EUTRANCELL",
            "tableName":"PM.PM_TC_EUTRANCELL_15MIN",
            "end":"2017-07-04 23:59:59",
            "period":15,
            "sceneTypeId":"3351864908",
            "code":"business_bytes",
            "start":"2017-07-03 00:00:00"})
    }).then(response => response.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => {
            console.log(err)
        })
}

export default myTest;