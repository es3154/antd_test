/**
 * Created by ddxx on 2017/5/17.
 */

import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

export class FormDemo extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { getFieldDecorator, getFieldError, getFieldsError, isFieldTouched } = Form;
        return (<Form layout='inline'>
            <FormItem>

            </FormItem>
        </Form>);
    }
}

