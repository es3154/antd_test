/**
 * Created by ddxx on 2017/5/14.
 */

import React from 'react';
import { AutoComplete } from 'antd';
const { Option } = AutoComplete;

export class AutoCompleteDemo extends React.Component {

    constructor() {
        super();

        this.state = {
            dataSource: []
        };

        this.handleSearch = (value) => {
            this.setState({
                dataSource: !value ? []:[
                    value,value+value,value+value+value
                    ]
            });
        }
    }


    render() {
        const {dataSource} = this.state;
        return (
            <div>
                <AutoComplete dataSource={dataSource}
                              style={{width:200}}
                              onSearch={this.handleSearch}
                              placeholder="input here"/>
                <br/>
                <br/>
                <AutoComplete style={{width:200}}
                              onSearch={this.handleSearch}
                              placeholder="input here">
                    {
                        dataSource.map((email) => {
                            <Option key={email}>{email}</Option>
                        })
                    }
                </AutoComplete>
            </div>
        );
    }
}