import React, { Component } from 'react'

import {  Router, Switch, Route } from "react-router-dom";

import history from './utils/history';
import { verifyAuthetication } from './utils/RouterRedirector';

import LoginPage from './containers/pages/LoginPage';
import SignUpPage from './containers/pages/SignUpPage';


import PrivatePagesContainer from './containers/pages/PrivatePagesContainer';


class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route component={PrivatePagesContainer} onEnter={verifyAuthetication} />
        </Switch>
      </Router>
    );
  }
}


export default App;