import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './modules/home/container';

const homePath = '/';
const aboutPath = '/home';
const workPath = '/work';
const contactPath = '/contact';
const loginPath = '/login';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={ homePath } component={ Home } />
          <Route path={ aboutPath } component={ Home } />
          <Route path={ workPath } component={ Home } />
          <Route path={ contactPath } component={ Home } />
          <Route path={ loginPath } component={ Home } />
        </div>
      </Router>
    );
  }
}
