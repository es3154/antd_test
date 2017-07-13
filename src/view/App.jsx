/**
 * Created by ddxx on 2017/5/11.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { LayoutDemo } from './LayoutDemo.jsx';
// import 'echarts-for-react';  //引入echarts框架,打包进vendor

class App extends React.Component {

    constructor() {
        super();


    }



    render() {

        return (
            <BrowserRouter>
                <Route path='/' component={LayoutDemo}/>
            </BrowserRouter>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));