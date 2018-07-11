/**
 * Created by ddxx on 2018/7/2
 */

import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

import modules from '../modulesConfig.js';
import menus from '../menuConfig.js';

import { asyncComponent } from '../core/AsyncComponent.jsx';

import '../theme/main.scss';

export class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            collapsed: false,
            mode: 'inline',
            selectMenuItem:'simpleEChartsDemo'
        };

    }

    onCollapse = (collapsed) =>{
        console.log(collapsed);
        this.setState({
            collapsed: collapsed,
            mode: collapsed ? 'vertical':'inline'
        });
    }

    onMenuItemSelect = ({item, key, selectedKeys}) => {
        // const selectMenuItem = key;
        // console.log(key);
        // this.setState({selectMenuItem});
    }

    render() {
        return (

            <Layout>
                <Sider collapsible={true} collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="log"></div>
                    <Menu theme="dark" mode={this.state.mode}
                          onSelect={this.onMenuItemSelect}>
                        {
                            recursion(menus)
                        }
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
                            <Switch>
                                {
                                    modules.map((module, i) => (
                                        <RouteItem key={i} {...module}/>
                                    ))
                                }
                            </Switch>
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


const recursion = (dataSource) => (
    dataSource.map((menu) => {
        if(menu.children) {
            return (
                <SubMenu key={menu.id} title={
                    <span>
                        <Icon type={menu.icon}/>
                        <span className="nav-text">{menu.title}</span>
                    </span>}>

                    {
                        recursion(menu.children)
                    }

                </SubMenu>
            )
        } else {
            const module = findModuleById(menu)
            if(module) {
                return (
                    <Menu.Item key={module.id}>
                        <Link to={module.path}>{module.name}</Link>
                    </Menu.Item>
                )
            }
            else {
                return null;
            }
        }
    })
)

const findModuleById = (id) => modules.find(module => module.id === id)

const RouteItem = ({path, module, actions}) => (<Route path={path} component={asyncComponent(module,actions)}/>)

