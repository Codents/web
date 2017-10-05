import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './modules/home/container';
import About from './modules/about/container';
const ReactGA = require('react-ga');
ReactGA.initialize('UA-107350235-1');

const homePath = '/';
const aboutPath = '/about';
const workPath = '/work';
const contactPath = '/contact';
const loginPath = '/login';
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export default class Routes extends Component {


  render() {

    return (
      <Router onUpdate={logPageView} >
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
