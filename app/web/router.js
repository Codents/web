import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './modules/home/container';
import About from './modules/about/container';

const homePath = '/';
const aboutPath = '/about';
const workPath = '/work';
const contactPath = '/contact';
const loginPath = '/login';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path={ homePath } component={ Home } />
          <Route path={ aboutPath } component={ About } />
          <Route path={ workPath } component={ Home } />
          <Route path={ contactPath } component={ Home } />
          <Route path={ loginPath } component={ Home } />
        </div>
      </Router>
    );
  }
}
