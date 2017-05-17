/**
 * Created by ddxx on 2017/5/14.
 */

import React from 'react';
import { Tabs, Icon, Button, Select } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

export class TabsDemo extends React.Component {

    constructor() {
        super();

        this.state = {
            tabPosition:'top'
        };

        this.changeTabPosition = (tabPosition) => {
            this.setState({tabPosition});
        };
    }

    render() {
        const operations = <Button>Extra Action</Button>
        return (
            // <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
            //     <TabPane tab={<span><Icon type="apple"/>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
            //     <TabPane tab={<span><Icon type="android"/>Tab 2</span>} disabled key="2">Content of Tab Pane 2</TabPane>
            //     <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            //     <TabPane tab="Tab 4" key="4">Content of Tab Pane 4</TabPane>
            //     <TabPane tab="Tab 5" key="5">Content of Tab Pane 5</TabPane>
            // </Tabs>
            <div style={{margin: 16}}>
                Tab position
                <Select value={this.state.tabPosition} onChange={this.changeTabPosition}>
                    <Option value="top">Top</Option>
                    <Option value="bottom">Bottom</Option>
                    <Option value="left">Left</Option>
                    <Option value="right">Right</Option>
                </Select>
                <br/>
                <Tabs defaultActiveKey="1" tabPosition={this.state.tabPosition}>
                    <TabPane tab={<span><Icon type="apple"/>Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab={<span><Icon type="android"/>Tab 2</span>} disabled key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>
            </div>
        );
    }
}