/**
 * Created by ddxx on 2017/5/11.
 */

// import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Table } from 'antd';


const columns = [{
    title: 'AAAAAAAA',
    dataIndex: 'a',
    width: 200,
    filters: [
        {
            text: 'Joe',
            value: 'Joe',
        },
        {
            text: 'Jim',
            value: 'Jim',
        }
    ]
},{
    title: 'BBBBBBBBBBBB',
    dataIndex: 'b',
    width: 200
},{
    title: 'CCCCCCCCCC',
    dataIndex: 'c',
    width: 200
},{
    title: 'DDDDDDDDDDD',
    dataIndex: 'd',
    width: 200
}];

const data = [{
    id: 1,
    a: 'aaaaaaaa',
    b: 'bbbbbbbbb'
},{
    id: 2,
    a: 'aaaaaaaa',
    b: 'bbbbbbbbb'
},{
    id: 3,
    a: 'aaaaaaaa',
    b: 'bbbbbbbbb'
},{
    id: 4,
    a: 'aaaaaaaa',
    b: 'bbbbbbbbb'
}]

const App = () => {


    return (
        <div style={{width:'600px', height: '100%'}}>
            <Table rowKey='id' columns={columns} dataSource={data} scroll={{x:800, y: 400}} bordered={true}
                   rowSelection={{type: 'checkbox'}}
                   expandable={{
                       rowExpandable: d => d.id > 1
                   }}
            />
        </div>
    )
}



ReactDom.render(<App/>, document.getElementById('app'));

// import App from './routerdemo/App.jsx';

// import LeafletApp from './view/leaflet/LeafletApp.jsx';
// const app = new LeafletApp();