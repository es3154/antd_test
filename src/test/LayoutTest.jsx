/**
 * Created by ddxx on 2017/7/29.
 */

import React from 'react';

import { Layout, Menu } from 'antd';

const { Header } = Layout

import './layouttest.css'

import img from './wef.png'

export class LayoutTest extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Layout>
                <Header>
                    <div className="l-logo"></div>
                    <Menu theme="dark" mode="horizontal"
                    className="l-menu">
                        <Menu.Item>
                            <img src={img} style={{verticalAlign:'middle'}}/>
                            <span>Nav1</span>
                        </Menu.Item>
                        <Menu.Item><span>Nav1</span></Menu.Item>
                        <Menu.Item><span>Nav1</span></Menu.Item>
                        <Menu.Item><span>Nav1</span></Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}