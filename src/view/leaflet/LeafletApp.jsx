/**
 * Created by ddxx on 2017/9/11.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './main.css';

export class LeafletApp extends React.Component {

    constructor() {
        super();
    }

    render() {
        const position = [51.505, -0.09];
        return (
            <Map center={position} zoom={13}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

ReactDom.render(<LeafletApp/>, document.getElementById('app'));