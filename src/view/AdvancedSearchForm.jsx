/**
 * Created by ddxx on 2017/5/24.
 */

import React from 'react';
import { Form, Row, Col, Input, Button, Icon} from 'antd';
import './advancedSearchForm.css';
import funObj from '../test/moduletest.js'
const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component {

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

            const {getS, setS} = funObj
            setS(20)
            console.log(`getS():${getS()}`)
        };

        this.testRouter = (e) => {
            e.preventDefault();
            const { match,history,location } = this.props;
            history.push('/SimpleEChartsDemo2');
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        };

        //测试route相关
        // const { match } = this.props;
        // console.log(`match=${match}`)

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
                        <Button type='primary' style={{ marginLeft:8 }} onClick={this.testRouter}>Test</Button>
                        <a style={{ marginLeft:8, fontSize:12 }} onClick={ this.toggle }>
                            Collapse<Icon type={ expand ? 'up':'down' }/>
                        </a>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const AdvancedSearchFormCreate = Form.create()(AdvancedSearchForm);
export default AdvancedSearchFormCreate;