/**
 * Created by ddxx on 2017/5/24.
 */

import React from 'react';
import { Form, Row, Col, Input, Button, Icon} from 'antd';
import './advancedSearchForm.css';
const FormItem = Form.Item;

export class AdvancedSearchForm extends React.Component {

    constructor() {
        super();

        this.state = {
            expand: false
        };


        this.handleReset = () => {
            this.props.form.resetFields();
        };

        this.toggle = () => {
            const { expand } = this.state;
            this.setState({ expand: !expand });
        };

        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((error,values) => {
                if(!error){
                    console.log('Received values of form: ',values);
                }
            });
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
            <Form onSubmit={this.handleSubmit} className="ant-advanced-search-form">
                <Row gutter={40}>
                    {children.splice(0,shownCount)}
                </Row>
                <Row>
                    <Col span={24} style={{textAlign:'right'}}>
                        <Button type='primary' htmlType='submit'>Search</Button>
                        <Button type='primary' style={{ marginLeft:8 }} onClick={this.handleReset}>Clear</Button>
                        <a style={{ marginLeft:8, fontSize:12 }} onClick={ this.toggle }>
                            Collapse<Icon type={ expand ? 'up':'down' }/>
                        </a>
                    </Col>
                </Row>
            </Form>
        );
    }
}