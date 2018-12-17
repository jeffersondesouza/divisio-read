import React, { Component } from 'react'
/* import { Router, Route, browserHistory } from 'react-router';
 */

import {  Router, Switch, Route, Link } from "react-router-dom";

import history from './utils/history';
import { verifyAuthetication } from './utils/RouterRedirector';

import LoginPage from './containers/pages/LoginPage';
import SignUpPage from './containers/pages/SignUpPage';
import Page404 from './containers/pages/Page404';

import PrivatePagesContainer from './containers/pages/PrivatePagesContainer';


import BooksPage from './containers/pages/BooksPage';
import BooksDetailsPage from './containers/pages/BooksDetailsPage';


class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/books" component={PrivatePagesContainer} onEnter={verifyAuthetication} />
{/*           <Route path="/books" component={BooksPage} onEnter={verifyAuthetication} />
          <Route path="/books/:id" component={BooksDetailsPage} onEnter={verifyAuthetication} />
 */}          <Route path="*" component={Page404} />
        </Switch>
      </Router>
    );
  }
}


export default App;