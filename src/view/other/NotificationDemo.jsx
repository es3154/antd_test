/**
 * Created by ddxx on 2017/6/16.
 */

import React from 'react';
import { Button, notification } from 'antd';

export default class NotificationDemo extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Button type='primary' onClick={openNotification}>Open the notification box</Button>
            </div>
        );
    }
}

const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    });
}