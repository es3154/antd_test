/**
 * Created by ddxx on 2017/5/11.
 */

import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App.jsx';


ReactDom.render(<App/>, document.getElementById('app'));

// import App from './routerdemo/App.jsx';

// import LeafletApp from './view/leaflet/LeafletApp.jsx';
// const app = new LeafletApp();