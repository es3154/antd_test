/**
 * Created by ddxx on 2017/6/19.
 */

import React from 'react';
import ReactDom from 'react-dom';
// import { BaseRouter } from './BaseRouter.jsx';
// import { NoMatchDemo } from './NoMatchDemo.jsx';
import { RecursiveExample } from './RecursiveExample.jsx';

export class App extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
           <RecursiveExample/>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));

