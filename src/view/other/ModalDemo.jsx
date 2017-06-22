/**
 * Created by ddxx on 2017/6/16.
 */

import React from 'react';
import { Modal, Button } from 'antd';
export default class ModalDemo extends React.Component {

    constructor() {
        super();

        this.state = {
            visible:false
        };

        this.handleClick = (e) => {
            this.setState({visible:true});
        };

        this.handleOk = (e) => {
            console.log(e);
            this.setState({visible:false});
        };

        this.handleCancel = (e) => {
            console.log(e);
            this.setState({visible:false});
        }
    }

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.handleClick}>Open</Button>
                <Modal title='Base Modal' visible={this.state.visible}
                       onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}