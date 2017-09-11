/**
 * Created by ddxx on 2017/7/31.
 */

import React from 'react';
import { observer } from 'mobx-react';
import { UserApp } from './UserApp.jsx';


@observer
export class MobxTest extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <UserApp/>
        )
    }
}