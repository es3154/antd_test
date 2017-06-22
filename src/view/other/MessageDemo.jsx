/**
 * Created by ddxx on 2017/6/16.
 */

import React from 'react';
import { message, Button } from 'antd';


export default class MessageDemo extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
            </div>
        );
    }
}

const success = () => {
    message.success('this is a message of success',2);
};
const error = () => {
    message.error('this is a message of error',2);
};
const warning = () => {
    message.warning('this is a message of warning',5);
};