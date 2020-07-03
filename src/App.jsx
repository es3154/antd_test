/**
 * Created by ddxx on 2017/5/11.
 */

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Main } from './core/Main';
import { appStore } from './core/AppStore';

export class App extends React.Component {

    constructor() {
        super();
    }



    render() {

        return (
            <Provider appStore = {appStore}>
                <BrowserRouter>
                    <Route path='/' component={Main}/>
                </BrowserRouter>
            </Provider>

        )
    }
}
