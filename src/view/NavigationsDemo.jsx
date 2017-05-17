/**
 * Created by ddxx on 2017/5/14.
 */

import React from 'react';
import { Icon, Dropdown, Button, Pagination, Steps, Menu } from 'antd';
const { Step } = Steps;

export class NavigationsDemo extends React.Component {

    constructor() {
        super();

        this.myMenu = (<Menu>
            <Menu.Item>
                <a target="_blank" href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" href="http://www.alipay.com/">2st menu item</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" href="http://www.alipay.com/">3st menu item</a>
            </Menu.Item>
        </Menu>);
    }

    render() {
        return (
            <div>
                <Dropdown overlay={this.myMenu} placement="bottomLeft">
                    <Button>
                        bottomLeft<Icon type="down"/>
                    </Button>
                </Dropdown>
                <Dropdown.Button overlay={this.myMenu} placement="bottomCenter" trigger={['click']}>
                    bottomCenter
                </Dropdown.Button>
                <Dropdown overlay={this.myMenu} placement="bottomRight" trigger={['click']}>
                    <Button>
                        bottomRight<Icon type="down"/>
                    </Button>
                </Dropdown>
                <br/>
                <br/>
                <Dropdown overlay={this.myMenu} placement="topLeft">
                    <Button>
                        topLeft<Icon type="up"/>
                    </Button>
                </Dropdown>

                <br/>
                <br/>
                <Pagination defaultCurrent={6} total={500}/>
                <br/>
                <br/>
                <Pagination showSizeChanger={true} onShowSizeChange={onShowSizeChange} defaultCurrent={6} total={500}/>
                <br/>
                <br/>
                <Pagination size="small" showSizeChanger showQuickJumper defaultCurrent={6} total={500}/>

                <br/>
                <br/>
                <Pagination simple defaultCurrent={6} total={500}/>

                <br/>
                <br/>

                <Steps current={1}>
                    <Step title="Finished" icon={<Icon type="user"/>} description="This is a description"/>
                    <Step title="In Progress" icon={<Icon type="solution"/>} description="This is a description"/>
                    <Step title="In Waiting" icon={<Icon type="smile-o"/>} description="This is a description"/>
                </Steps>
                <br/>
                <br/>
                <Steps direction="vertical" current={1}>
                    <Step title="Finished" icon={<Icon type="user"/>} description="This is a description"/>
                    <Step title="In Progress" icon={<Icon type="solution"/>} description="This is a description"/>
                    <Step title="In Waiting" icon={<Icon type="smile-o"/>} description="This is a description"/>
                </Steps>

                <br/>
                <br/>
                <Steps direction="vertical" current={1} status="error">
                    <Step title="Finished" icon={<Icon type="user"/>} description="This is a description"/>
                    <Step title="In Progress" icon={<Icon type="solution"/>} description="This is a description"/>
                    <Step title="In Waiting" icon={<Icon type="smile-o"/>} description="This is a description"/>
                </Steps>

            </div>
        );
    }
}


function onShowSizeChange(current, pagesize) {
    console.log(`current:${current} pagesize:${pagesize}`);
}