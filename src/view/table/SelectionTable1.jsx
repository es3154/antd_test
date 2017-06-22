/**
 * Created by ddxx on 2017/6/14.
 */

import React from 'react';
import { Table } from 'antd';

export default class SelectionTable1 extends React.Component {

    constructor() {
        super();

        this.state = {
            selectedRowKeys: []
        };

        this.onSelectChange = selectedRowKeys => {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.setState({selectedRowKeys});
        }
    }

    render() {

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }];

        const data = [];
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }

        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [{
                key:'all-data',
                text:'Select All Data',
                onSelect:()=>{
                    this.setState({
                        selectedRowKeys:[...Array(46).keys()]  //0...46
                    });
                }
            },{
                key:'odd',
                text:'Select odd Row',
                onSelect:(changableRowKeys)=>{
                    let newSelectRowKeys = [];
                    newSelectRowKeys = changableRowKeys.filter((key,index)=>{
                        if(index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({selectedRowKeys:newSelectRowKeys});
                }
            }]
        }

        return (<Table rowSelection={rowSelection} columns={columns} dataSource={data}/>);
    }
}