/**
 * Created by ddxx on 2017/5/24.
 */

import React from 'react';
import { Form, Row, Col, Input, Button, Icon} from 'antd';

const FormItem = Form.Item;

export class AdvancedSearchForm extends React.Component {

    constructor() {
        super();

        this.state = {
            expand: false
        };
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        };

        const children = [];

        for(let i=0; i< 10; i++) {
            children.push(
                <Col span={8} key={i}>
                    <FormItem {...formItemLayout} label={`Field ${i}`}>
                        {
                            getFieldDecorator(`Field${i}`)(
                                <Input placeholder="placeholder"/>
                            )
                        }
                    </FormItem>
                </Col>
            );
        }

        const { expand } = this.state;
        const shownCount = expand ? children.length : 6;
        return (
            <Form>
                <Row gutter={40}>
                    {children.splice(0,shownCount)}
                </Row>
                <Row>

                </Row>
            </Form>
        );
    }
}