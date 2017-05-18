/**
 * Created by ddxx on 2017/5/18.
 */

import React from 'react';
import { Form, Icon, Input, Checkbox, Button } from 'antd';
import './normalformdemo.css';
const FormItem = Form.Item;

export class NormalFormDemo extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (<Form className="login-form">
            <FormItem>
                {
                    getFieldDecorator('username',{
                        rules:[{ required: true, message: 'please input you username!' }]
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize:13 }}/>} placeholder="Username"/>
                    )
                }
            </FormItem>
            <FormItem>
                {
                    getFieldDecorator('password',{
                        rules: [{ required: true,message: 'please input you password!' }]
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize:13 }}/>} type="password" placeholder="Password"/>
                    )
                }
            </FormItem>
            <FormItem>
                {
                    getFieldDecorator('remeber',{
                        valuePropName:'checked',
                        initialValue:true
                    })(
                        <Checkbox>Remeber me</Checkbox>
                    )
                }
                <a className="login-form-forgot">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                Or <a>register now!</a>
            </FormItem>
        </Form>);
    }
}