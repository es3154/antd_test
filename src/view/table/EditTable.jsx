/**
 * Created by ddxx on 2017/6/15.
 */

import React from 'react';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import './editTable.css'


class EditTableCell extends React.Component {

    constructor() {
        super();

        this.state = {
            text:'',
            editable: false
        };

        this.handleChange = (e) => {
            const text = e.target.value;
            this.setState({text});
        };

        this.check = () => {
            this.setState({editable:false});
            if(this.props.onChange) {
                this.props.onChange(this.state.text);
            }
        };

        this.edit = () => {
            this.setState({editable:true});
        };

    }

    componentWillMount() {
        const text = this.props.text;
        this.setState({text});
    }


    render() {
        const { text, editable } = this.state;

        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input value={text}
                                   onChange={this.handleChange}
                                   onPressEnter={this.check}
                            />
                            <Icon type="check"
                                  className="editable-cell-icon-check"
                                  onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            { text || '' }
                            <Icon type="edit"
                                  className="editable-cell-icon"
                                  onClick={this.edit}
                            />
                        </div>
                }
            </div>
        );
    }
}

export class EditTable extends React.Component {

    constructor() {
        super();

        this.state = {
            dataSource: [{
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }],
            count: 2,
        };

        this.columns = [{
            title:'Name',
            dataIndex:'name',
            width:'30%',
            render:(text,row,index)=>(
                <EditTableCell text={text} onChange={this.onCellChange(index,'name')}/>
            )
        },{
            title:'Age',
            dataIndex:'age'
        },{
            title:'Address',
            dataIndex:'address'
        },{
            title:'operation',
            dataIndex:'operation',
            render:(text,record,index)=>{
                return(
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to Delete" onConfirm={()=>this.onDelete(index)}>
                                <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                )
            }
        }];

        this.onCellChange = (index,key) => {
            return (value) => {
                const dataSource = [...this.state.dataSource];
                dataSource[index][key] = value;
                this.setState({dataSource});
            }
        };

        this.onDelete = (index) => {
            const dataSource = [...this.state.dataSource];
            dataSource.splice(index,1);
            this.setState({dataSource});
        };

        this.handleAdd = () => {
            const { count, dataSource } = this.state;
            const newData = {
                key: count,
                name: `Edward King ${count}`,
                age: 32,
                address: `London, Park Lane no. ${count}`,
            };
            this.setState({
                dataSource: [...dataSource, newData],
                count: count + 1,
            });
        }
    }

    render() {
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table columns={this.columns} dataSource={this.state.dataSource} bordered={true}/>
            </div>
        );
    }
}

