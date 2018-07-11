/**
 * Created by ddxx on 2017/6/22.
 */

import React from 'react';

export const asyncComponent = (loadComponent, params) => (
    class AsyncComponent extends React.Component {

        constructor() {
            super();
            this.state = {
                Component: null
            }
        }

        componentWillMount() {
            if(this.state.Component == !null) {
                return;
            }

            loadComponent()
                .then(module => module.default)
                .then((Component) => {
                this.setState({ Component });
            })
                .catch((err) => {
                console.log(`Can not load Component in <AsyncComponent />`)
                throw err;
                });
        }

        render() {
            const { Component } = this.state;
            return (Component) ? <Component {...this.props} params={params}/> : null;
        }
    }
)
