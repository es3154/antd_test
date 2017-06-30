/**
 * Created by ddxx on 2017/5/11.
 */

import React from 'react';
import { Button, Radio, Icon } from 'antd';

export default class ButtonDemo extends React.Component {

    constructor() {
        super();

        this.state = {
            size: "large"
        };

        this.handSizeChange = this.handSizeChange.bind(this);
    }

    handSizeChange(e) {
        console.log(e.target.value);
        this.setState({size: e.target.value});
    }

    render() {
        const size = this.state.size;
        console.log(`新的size:${size}`);
        return (
            <div>
                <br></br>
                <Radio.Group value={size} size={size} onChange={this.handSizeChange}>
                    <Radio.Button value="large">large</Radio.Button>
                    <Radio.Button value="default">default</Radio.Button>
                    <Radio.Button value="small">small</Radio.Button>
                </Radio.Group>
                <br></br>
                <Button type="primary" shape="circle" icon="download" size={size}></Button>
                <Button type="primary" icon="download" size={size}>Download</Button>
                <Button type="primary" size={size}>Normal</Button>
                <br></br>
                <Button.Group size={size}>
                    <Button type="primary">
                        <Icon type="left"/>Backward
                    </Button>
                    <Button type="primary">
                        Forward<Icon type="right"/>
                    </Button>
                </Button.Group>
                <br></br>
                <br></br>
                <span>
                    <Button type="primary" loading>Loading</Button>
                    <Button type="primary" icon="poweroff" loading>Loading</Button>
                    <br></br>
                    <br></br>
                    <Button shape="circle" loading></Button>
                    <Button type="primary" shape="circle" loading></Button>
                </span>
                <br></br>
                <br></br>
                <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                    <Button type="primary" ghost>Primary</Button>
                    <Button ghost>Default</Button>
                    <Button type="dashed" ghost>Dashed</Button>
                    <Button type="danger" ghost>danger</Button>
                </div>

            </div>
        )
    }
}