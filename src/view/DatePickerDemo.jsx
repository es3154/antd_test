/**
 * Created by ddxx on 2017/5/17.
 */

import React from 'react';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

function onChange(date, dateString) {
    console.log(dateString);
}

function disabledDate(current) {
    return current && current.valueOf() < Date.now();
}
function disabledDateTime() {
    return {
        disabledHours: () => [0,1,2,3,4,5,6,7],
        disabledMinutes: () => [11,12,13,15],
        disabledSeconds: () => [55, 56]
    };
}

export class DatePickerDemo extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (<div>
            <DatePicker onChange={onChange}
                        format="YYYY/MM/DD HH:mm:ss"
                        disabledDate={disabledDate}
                        disabledTime={disabledDateTime}
                        showTime/>
            <br/>
            <MonthPicker onChange={onChange} placeholder="选取月份"/>
            <br/>
            <RangePicker onChange={onChange}/>
        </div>);
    }
}