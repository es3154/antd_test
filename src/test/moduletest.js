/**
 * Created by ddxx on 2017/7/6.
 */
"use strict";


let s = 10

const getS = () => s
const setS = v => s = v

const funObj = {getS: getS,setS: setS}

export default funObj