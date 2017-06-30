/**
 * Created by ddxx on 2017/5/11.
 */

import React from 'react';
import { Row, Col} from 'antd';
import './griddemo.css';

export default class GridDemo extends React.Component {

    constructor() {
        super();

    }


    render() {
        return(
        <div className="gutter-example">
            <Row gutter={24}>
                <Col span={12}>
                    <div className="gutter-box">col-12</div>
                </Col>
                <Col span={12}>
                    <div className="gutter-box">col-12</div>
                </Col>
            </Row>
            <Row gutter={32}>
                <Col span={8}>
                    <div className="gutter-box">col-8</div>
                </Col>
                <Col span={8} offset={4}>
                    <div className="gutter-box">col-8</div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={6} offset={4}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
            </Row>

            <Row type="flex" justify="center" align="top">
                <Col span={4}>
                    <div className="gutter-box height-100">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-50">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-80">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-120">col-4</div>
                </Col>
            </Row>

            <Row type="flex" justify="space-around" align="center">
                <Col span={4}>
                    <div className="gutter-box height-100">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-50">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-80">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-120">col-4</div>
                </Col>
            </Row>

            <Row type="flex" justify="space-between" align="bottom">
                <Col span={4}>
                    <div className="gutter-box height-100">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-50">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-80">col-4</div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box height-120">col-4</div>
                </Col>
            </Row>

        </div>
        );
    }
}