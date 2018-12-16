import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router';

import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import BooksPage from './pages/BooksPage';
import BooksDetailsPage from './pages/BooksDetailsPage';


class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" exact component={LoginPage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/books/:id" component={BooksDetailsPage} />
        <Route path="*" component={Page404} />
      </Router>
    );
  }
}


export default App;