/**
 * Created by ddxx on 2017/5/12.
 */

import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Form } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
import { NavigationsDemo } from './NavigationsDemo.jsx';
import { TabsDemo } from './TabsDemo.jsx';
import { AutoCompleteDemo } from './AutoCompleteDemo.jsx';
import { DatePickerDemo } from './DatePickerDemo.jsx';
import { RegistrationForm } from './RegistrationForm.jsx';
import { AdvancedSearchForm } from './AdvancedSearchForm.jsx';
import { FormDemo } from './FormDemo.jsx';
import { NormalFormDemo } from './NormalFormDemo.jsx';
import { CollectionsPage } from './CollectionsPage.jsx';
import { TimeRelatedForm } from './TimeRelatedForm.jsx';
import { LastFromDemo } from './LastFromDemo.jsx';


import './layoutDemo.css';

export class LayoutDemo extends React.Component {

    constructor() {
        super();

        this.state = {
            collapsed: false,
            mode: 'inline',
            selectMenuItem:'tab'
        };

        const RegistrationFormCreate = Form.create()(RegistrationForm);
        const AdvancedSearchFormCreate = Form.create()(AdvancedSearchForm);
        const FormDemoCreate = Form.create()(FormDemo);
        const NormalFormDemoCreate = Form.create()(NormalFormDemo);
        const TimeRelatedFormCreate = Form.create()(TimeRelatedForm);
        const LastFromDemoCreate = Form.create()(LastFromDemo);

        this.views = {
            'nav': <NavigationsDemo/>,
            'tab': <TabsDemo/>,
            'auto': <AutoCompleteDemo/>,
            'date': <DatePickerDemo/>,
            'form': <FormDemoCreate/>,
            'normalForm': <NormalFormDemoCreate/>,
            'regForm': <RegistrationFormCreate/>,
            'advancedSearch': <AdvancedSearchFormCreate/>,
            'collectionsPage': <CollectionsPage/>,
            'timeRelated': <TimeRelatedFormCreate/>,
            'lastFormDemo': <LastFromDemoCreate/>
        };

        this.onCollapse = this.onCollapse.bind(this);

        this.onMenuItemSelect = this.onMenuItemSelect.bind(this);

    }

    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({
            collapsed: collapsed,
            mode: collapsed ? 'vertical':'inline'
        });
    }

    onMenuItemSelect({item, key, selectedKeys}) {
        const selectMenuItem = key;
        console.log(key);
        this.setState({selectMenuItem});
    }

    render() {
        return (
            // <Layout>
            //     <Sider>Sider</Sider>
            //
            //     <Layout>
            //         <Header>Header</Header>
            //         <Content>Content</Content>
            //         <Footer>Footer</Footer>
            //     </Layout>
            //
            //
            // </Layout>

            // <Layout>
            //     <Header>
            //         <div className="log"></div>
            //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight:'64px'}}>
            //             <Menu.Item key="1">Nav1</Menu.Item>
            //             <Menu.Item key="2">Nav2</Menu.Item>
            //             <Menu.Item key="3">Nav3</Menu.Item>
            //         </Menu>
            //     </Header>
            //     <Content style={{padding:'0 50px'}}>
            //         <Breadcrumb style={{margin:'12px 0'}}>
            //             <Breadcrumb.Item>Home</Breadcrumb.Item>
            //             <Breadcrumb.Item>List</Breadcrumb.Item>
            //             <Breadcrumb.Item>App</Breadcrumb.Item>
            //         </Breadcrumb>
            //         <div style={{background:'#fff', padding:24, minHeight:280}}>Context</div>
            //     </Content>
            //     <Footer style={{textAlign:'center'}}>
            //         Ant Design ©2016 Created by Ant UED
            //     </Footer>
            // </Layout>

            // <Layout>
            //     <Header>
            //         <div className="log"></div>
            //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{lineHeight:'64px'}}>
            //             <Menu.Item key="1">Nav1</Menu.Item>
            //             <Menu.Item key="2">Nav2</Menu.Item>
            //             <Menu.Item key="3">Nav3</Menu.Item>
            //         </Menu>
            //     </Header>
            //     <Breadcrumb style={{margin:'12px 0'}}>
            //         <Breadcrumb.Item>Home</Breadcrumb.Item>
            //         <Breadcrumb.Item>List</Breadcrumb.Item>
            //         <Breadcrumb.Item>App</Breadcrumb.Item>
            //     </Breadcrumb>
            //     <Layout>
            //         <Sider width={200}>
            //             <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
            //             style={{height:'100%'}}>
            //                 <SubMenu key="sub1" title={<span><Icon type="user"/>Subnav 1</span>}>
            //                     <Menu.Item key="1">option1</Menu.Item>
            //                     <Menu.Item key="2">option2</Menu.Item>
            //                     <Menu.Item key="3">option3</Menu.Item>
            //                     <Menu.Item key="4">option4</Menu.Item>
            //                 </SubMenu>
            //                 <SubMenu key="sub2" title={<span><Icon type="laptop"/>Subnav 2</span>}>
            //                     <Menu.Item key="5">option1</Menu.Item>
            //                     <Menu.Item key="6">option2</Menu.Item>
            //                     <Menu.Item key="7">option3</Menu.Item>
            //                     <Menu.Item key="8">option4</Menu.Item>
            //                 </SubMenu>
            //                 <SubMenu key="sub3" title={<span><Icon type="notification"/>Subnav 3</span>}>
            //                     <Menu.Item key="9">option1</Menu.Item>
            //                     <Menu.Item key="10">option2</Menu.Item>
            //                     <Menu.Item key="11">option3</Menu.Item>
            //                     <Menu.Item key="12">option4</Menu.Item>
            //                 </SubMenu>
            //             </Menu>
            //         </Sider>
            //         <Content style={{ background:'#fff', padding:'24px', margin:0, minHeight:'280px'}}>
            //             Context
            //         </Content>
            //
            //     </Layout>
            //
            //     <Footer style={{textAlign:'center'}}>
            //         Ant Design ©2016 Created by Ant UED
            //     </Footer>
            // </Layout>

            <Layout>
                <Sider collapsible={true} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="log"></div>
                    <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['tab']}
                          defaultOpenKeys={['sub2']} onSelect={this.onMenuItemSelect}>
                        <SubMenu key="sub1"
                                 title={<span><Icon type="user"/><span className="nav-text">User</span></span>}>
                            <Menu.Item key="nav">NavigationsDemo</Menu.Item>
                            <Menu.Item key="tab">TabDemo</Menu.Item>
                            <Menu.Item key="auto">AutoCompleteDemo</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2"
                                 title={<span><Icon type="team"/><span className="nav-text">Team</span></span>}>
                            <Menu.Item key="date">DatePickerDemo</Menu.Item>
                            <Menu.Item key="form">FormDemo</Menu.Item>
                            <Menu.Item key="normalForm">NormalFormDemo</Menu.Item>
                            <Menu.Item key="regForm">RegistrationForm</Menu.Item>
                            <Menu.Item key="advancedSearch">AdvancedSearchForm</Menu.Item>
                            <Menu.Item key="collectionsPage">CollectionsPage</Menu.Item>
                            <Menu.Item key="timeRelated">TimeRelatedForm</Menu.Item>
                            <Menu.Item key="lastFormDemo">LastFormDemo</Menu.Item>

                        </SubMenu>
                        <Menu.Item key="6">
                            <span>
                                <Icon type="file"/>
                                <span className="nav-text">file</span>
                            </span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background:'#fff', padding:0}}/>
                    <Content style={{margin:'0 16px'}}>
                        <Breadcrumb style={{margin:'12px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding:24, background:'#fff', minHeight:360}}>
                            {
                                this.views[this.state.selectMenuItem]
                            }
                        </div>
                    </Content>
                    <Footer style={{textAlign:'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>

        );
    }
}

