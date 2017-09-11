/**
 * Created by ddxx on 2017/5/11.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
// import { LayoutDemo } from './LayoutDemo.jsx';
// import { LayoutTest } from '../test/LayoutTest.jsx'
import { UserAppStore } from '../test/UserAppStore.js';
import { MobxTest } from '../test/MobxTest.jsx';

class App extends React.Component {

    constructor() {
        super();


    }



    render() {

        return (
            <Provider {...new UserAppStore()}>
                <BrowserRouter>
                    <Route path='/' component={MobxTest}/>
                </BrowserRouter>
            </Provider>

        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));