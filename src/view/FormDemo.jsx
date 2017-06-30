/**
 * Created by ddxx on 2017/5/17.
 */

import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
    console.log('fieldsError',fieldsError);
    return Object.keys(fieldsError).some(field => {
        !fieldsError[field];
    })
}

class FormDemo extends React.Component {

    constructor() {
        super();

        this.handleSubmit = e => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if(!err)
                    console.log(values);
            });
        }
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    render() {
        const { getFieldDecorator, getFieldError, getFieldsError, isFieldTouched } = this.props.form;
        const userNameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (<Form layout='inline' onSubmit={this.handleSubmit}>
            <FormItem validateStatus={userNameError || ''} help={userNameError || ''}>
                {
                    getFieldDecorator('username',{
                        rules: [{required: true, message: 'please input you name!'}]
                    })(
                        <Input prefix={ <Icon type="user" style={{fontSize: 13}} />} placeholder="Username" />
                    )
                }
            </FormItem>
            <FormItem validateStatus={passwordError || ''} help={passwordError || ''}>
                {
                    getFieldDecorator('password',{
                        rules: [{required: true, message: 'please input you password!'}]
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize:13}} />} type="password" placeholder="Password"/>
                    )
                }
            </FormItem>
            <FormItem>
                <Button type="primary"
                        htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Log In
                </Button>
            </FormItem>
        </Form>);
    }
}

const FormDemoCreate = Form.create()(FormDemo);
export default FormDemoCreate;


