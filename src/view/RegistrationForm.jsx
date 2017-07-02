/**
 * Created by ddxx on 2017/5/24.
 */

import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, AutoComplete, Row, Col, Button,Checkbox } from 'antd';
const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;
const { Option } = Select;


class RegistrationForm extends React.Component {

    constructor() {
        super();

        this.state = {
            confirmDirty: false,
            autoCompleteResult: []
        };

        this.checkConfirm = (rule, value, callback) => {
            const form = this.props.form;
            if(value && this.state.confirmDirty) {
                form.validateFields(['confirm'],{force:true});
            }
            callback();
        }

        this.checkPassword = (rule, value, callback) => {
            const form = this.props.form;
            if(value && value != form.getFieldValue('password')) {
                callback('Two passwords that you enter is inconsistent!');
            } else {
                callback();
            }

        }

        this.submitHandle = (e) => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((error,values) => {
               if(!error) {
                   console.log('Received values of form: ', values);
               }

               //测试动态加载模块 外部传递自定义参数功能
               const params = this.props.params;
                params.map(({key, name, description}) => {
                    console.log(`key=${key}    name=${name}   description=${description}`);
                    return key;
                })
            });
        }
    }

    render() {

        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;


        const formItemLayout = {
            labelCol: {
                xs: { span: 24},
                sm:{ span: 6 }
            },
            wrapperCol: {
                xs: { span: 24},
                sm:{ span: 14 }
            }
        };

        const tailFormItemLayout = {
            wrapperCol: {
                xs: { span:24, offset: 0 },
                sm: { span:14, offset: 6 }
            }
        };

        const prefixSelector = getFieldDecorator('prefix',{
            initialValue: '86'
        })(
            <Select>
                <Option value="86">+86</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map((website) => {
            return <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        })

        return (
            <Form onSubmit={this.submitHandle}>
                <FormItem {...formItemLayout} label="E-mail" hasFeedback>
                    {
                        getFieldDecorator('email',{
                            rules: [{
                                type:'email',message:'The input is not valid E-mail!'
                            },{
                                required:true,message:'Please input your E-mail!'
                            }]
                        })(
                            <Input/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Password" hasFeedback>
                    {
                        getFieldDecorator('password',{
                            rules: [{
                                required:true,message:'Please input your password!'
                            },{
                                validator:this.checkConfirm
                            }]
                        })(
                            <Input type="password"/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout} label="Confirm Password" hasFeedback>
                    {
                        getFieldDecorator('confirm',{
                            rules: [{
                                required:true,message:'Please confirm your password!'
                            },{
                                validator:this.checkPassword
                            }]
                        })(
                            <Input type="password"/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout}
                          label={(
                              <span>Nickname&nbsp;
                                  <Tooltip title="What do you want other to call you?">
                                      <Icon type="question-circle-o"/>
                                  </Tooltip>
                              </span>
                          )}
                          hasFeedback>
                    {
                        getFieldDecorator('nickname',{
                            rules: [{
                                required: true, message: 'Please input your nickname!', whitespace: true
                            }]
                        })(
                            <Input/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout}
                          label="Habitual Residence"
                          hasFeedback>
                    {
                        getFieldDecorator('residence',{
                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                            rules: [{
                                type: 'array', required: true, message: 'Please input your habitual residence!'
                            }]
                        })(
                           <Cascader options={residences}/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout}
                          label="Phone Number"
                          hasFeedback>
                    {
                        getFieldDecorator('phone',{
                            rules: [{
                                required: true, message: 'Please input your Phone Number!'
                            }]
                        })(
                            <Input addonBefore={prefixSelector}/>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout}
                          label="Website">
                    {
                        getFieldDecorator('website',{
                            rules: [{
                                required: true, message: 'Please input your Website!'
                            }]
                        })(
                            <AutoComplete dataSource={websiteOptions} placeholder="website">
                                <Input/>
                            </AutoComplete>
                        )
                    }
                </FormItem>
                <FormItem {...formItemLayout}
                          label="Captcha"
                          extra="We must make sure that your are a human.">

                   <Row gutter={8}>
                       <Col span={12}>
                           {
                               getFieldDecorator('captcha',{
                                   rules:[{
                                       required: true, message: 'Please input the captcha you got!'
                                   }]
                               })(
                                   <Input size="large"/>
                               )
                           }
                       </Col>
                       <Col span={12}>
                           <Button size="large">Get captcha</Button>
                       </Col>
                   </Row>
                </FormItem>
                <FormItem {...tailFormItemLayout} style={{marginBottom: 8}}>
                    {
                        getFieldDecorator('agreement',{
                            valuePropName: 'checked'
                        })(
                            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                        )
                    }
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" size="large">Register</Button>
                </FormItem>
            </Form>
        );
    }
}

const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

const RegistrationFormCreate = Form.create()(RegistrationForm);
export default RegistrationFormCreate;