import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router';

import LoginPage from './containers/pages/LoginPage';
import SignUpPage from './containers/pages/SignUpPage';
import Page404 from './containers/pages/Page404';
import BooksPage from './containers/pages/BooksPage';
import BooksDetailsPage from './containers/pages/BooksDetailsPage';
import { verifyAuthetication } from './utils/RouterRedirector';


class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/books" component={BooksPage} onEnter={verifyAuthetication} />
        <Route path="/books/:id" component={BooksDetailsPage} onEnter={verifyAuthetication} />
        <Route path="*" component={Page404} />
      </Router>
    );
  }
}


export default App;