/**
 * Created by ddxx on 2017/5/14.
 */

import React from 'react';
import { AutoComplete, Checkbox } from 'antd';
import funObj from '../test/moduletest.js'
const { Option } = AutoComplete;
const CheckBoxGroup = Checkbox.Group;

export default class AutoCompleteDemo extends React.Component {

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

        this.checkBoxChangeHandle = e => {
            console.log(e.target.checked);

            const {getS} = funObj
            // setS(30)
            console.log(`getS():${getS()}`)
        };

        this.checkBoxGroupChangeHandle = checkValues => {
            console.log(checkValues);
        }

        this.plainOptions = ['Apple', 'Pear', 'Orange'];
        this.options = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
        ];
        this.optionsWithDisabled = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange', disabled: false },
        ];
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

                <br/>
                <br/>
                <Checkbox onChange={this.checkBoxChangeHandle}>checkBox</Checkbox>

                <br/>
                <br/>

                <CheckBoxGroup options={this.plainOptions} defaultValue={['Apple']}
                               onChange={this.checkBoxGroupChangeHandle}/>
                <br/>
                <CheckBoxGroup options={this.options} defaultValue={['Pear']}
                               onChange={this.checkBoxGroupChangeHandle}/>
                <br/>
                <CheckBoxGroup options={this.optionsWithDisabled} disabled defaultValue={['Apple']}
                               onChange={this.checkBoxGroupChangeHandle}/>

            </div>
        );
    }
}