/**
 * Created by ddxx on 2017/7/31.
 */

import React from 'react';
import { observer, inject } from 'mobx-react'

@inject('name')
@inject('age')
@observer
export class UserApp extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {
                    `${this.props.name}:${this.props.age}`
                }
            </div>
        )
    }
}