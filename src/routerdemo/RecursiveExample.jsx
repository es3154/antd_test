/**
 * Created by ddxx on 2017/6/19.
 */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class RecursiveExample extends React.Component {

    constructor() {
        super();

        import(/* webpackChunkName: "my-chunk-name" */ './a.js').then(module => module.default).then(A => {
            const a = new A();
            a.f();
        });
    }

    render() {
        return (
            <Router>
                <Person match={{params:{id:0}, url:''}} />
            </Router>
        );
    }
}

const PEEPS = [
    { id: 0, name: 'Michelle', friends: [ 1, 2, 3 ] },
    { id: 1, name: 'Sean', friends: [ 0, 3 ] },
    { id: 2, name: 'Kim', friends: [ 0, 1, 3 ], },
    { id: 3, name: 'David', friends: [ 1, 2 ] }
];

const find = (id) => PEEPS.find(p => p.id == id);

const Person = ({match}) => {
    const person = find(match.params.id);

    return (
        <div>
            <h3>{person.name}’s Friends</h3>
            <ul>
                {
                    person.friends.map( id => (
                        <li key={id}>
                            <Link to={`${match.url}/${id}`}>
                                {find(id).name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Route path={`${match.url}/:id`} component={Person}/>
        </div>
    );
};