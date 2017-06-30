/**
 * Created by ddxx on 2017/5/26.
 */

import React from 'react';
import { Form, Button, Modal, Radio, Input } from 'antd';
const FormItem = Form.Item;


class CollectionCreateForm extends React.Component {

    constructor() {
        super();
    }

    render() {

        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;

        return (
            <Modal visible={visible} title="Create a new collection"
                   okText="Create" onCancel={onCancel} onOk={onCreate}>
                <Form layout="vertical">
                    <FormItem label="Title">
                        {
                            getFieldDecorator('title',{
                              rules:[{required:true,message:'Please input the title of collection!'}]
                            })(
                                <Input/>
                            )
                        }
                    </FormItem>
                    <FormItem label="Description">
                        {
                            getFieldDecorator('description')(<Input type="textarea"/>)
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('modifier',{
                                initialValue:'public'
                            })(
                                <Radio.Group>
                                    <Radio value="public">Public</Radio>
                                    <Radio value="private">Private</Radio>
                                </Radio.Group>
                            )
                        }
                    </FormItem>
                </Form>
            </Modal>
        );
    }
}

const CollectionCreateFormCreate = Form.create()(CollectionCreateForm);

export default class CollectionsPage extends React.Component {

    constructor() {
        super();

        this.state = {
            visible:false
        };

        this.saveFromRef = (form) => {
            this.form = form;
        };

        this.showModal = () => {
            this.setState({visible:true});
        };

        this.handleCancel = () => {
            this.setState({visible:false});
        };

        this.handleCreate = () => {
            const form = this.form;
            form.validateFields((error,values) => {
                if(error) {
                    return;
                }

                console.log('Received values of form: ', values);
                form.resetFields();
                this.setState({visible:false});
            });
        }
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New Collection</Button>
                <CollectionCreateFormCreate ref={this.saveFromRef}
                                            visible={this.state.visible}
                                            onCancel={this.handleCancel}
                                            onCreate={this.handleCreate}/>
            </div>
        );
    }
}