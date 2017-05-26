
/**
 * Created by ddxx on 2017/5/26.
 */

import React from 'react';
import { Form, Button, DatePicker, TimePicker } from 'antd';


const FormItem = Form.Item;
const { MonthPicker, RangePicker } = DatePicker;

export class TimeRelatedForm extends React.Component {

    constructor() {
        super();

        this.handleSubmit = (e) => {
            e.preventDefault();

            this.props.form.validateFields((error,fieldValues)=>{
                if(error)
                    return;

                const rangeValue = fieldValues['range-picker'];
                const rangeTimeValue = fieldValues['range-time-picker'];

                const values = {
                    'date-picker': fieldValues['date-picker'].format('YYYY-MM-DD'),
                    'date-time-picker': fieldValues['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
                    'month-picker': fieldValues['month-picker'].format('YYYY-MM'),
                    'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
                    'range-time-picker': [
                        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                    ],
                    'time-picker': fieldValues['time-picker'].format('HH:mm:ss'),
                };

                console.log('Received values of form: ', values);
            });
        }
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span:24 },
                sm: { span:8 }
            },
            wrapperCol: {
                xs: { span:24 },
                sm: { span:6 }
            }
        };

        const config = {
            rules:[{ type:'object', required:true, message:'Please select time!' }]
        };

        const rangConfig = {
            rules:[{ type:'array', required:true, message:'Please select time!' }]
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="DatePicker">
                    {
                        getFieldDecorator('date-picker',config)(
                            <DatePicker/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="DatePicker[showtime]">
                    {
                        getFieldDecorator('date-time-picker',config)(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="MonthPicker">
                    {
                        getFieldDecorator('month-picker',config)(
                            <MonthPicker/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="RangePicker">
                    {
                        getFieldDecorator('range-picker',rangConfig)(
                            <RangePicker/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="RangePicker[showtime]">
                    {
                        getFieldDecorator('range-time-picker',rangConfig)(
                            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="TimePicker">
                    {
                        getFieldDecorator('time-picker',config)(
                            <TimePicker/>
                        )
                    }
                </FormItem>
                <FormItem wrapperCol={{
                    xs: { span:24, offset:0 },
                    sm: { span:16, offset:8 }
                }}>
                    <Button type="primary" htmlType="submit" size="large">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}