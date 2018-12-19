import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch, Route } from "react-router-dom";

import AuthMidleware from '../../../store/modules/auth/middleware';
import UiMidleware from '../../../store/modules/ui/middleware';

import BooksPage from '../BooksPage';
import BooksDetailsPage from '../BooksDetailsPage';

import Header from '../../../components/layout/Header';
import SideMenu from '../../../components/ui/SideMenu';



class PrivatePages extends Component {


  componentWillMount() {
    this.props.dispatchHideSideMenu();
  }

  handleShowSidemenu = () => {
    this.props.dispatchShowSideMenu();
  }

  handleHideSidemenu = () => {
    this.props.dispatchHideSideMenu();
  }

  handleLogout = () => {
    this.props.dispatchLogout();
  }

  render() {
    const { showMainMenuReturn, showMainMenuSandwish, showSidbarMenu } = this.props;

    return (
      <div>
        <SideMenu
          showSidbarMenu={showSidbarMenu}
          onLogout={this.handleLogout}
          onHideSideMenu={this.handleHideSidemenu}
        />
        <Header
          showMainMenuReturn={showMainMenuReturn}
          showMainMenuSandwish={showMainMenuSandwish}
          onToogleShowSidemenu={this.handleShowSidemenu}
        />
        <Switch>
          <Route path="/books" component={BooksPage} exact />
          <Route path="/books/:id" component={BooksDetailsPage} exact />
          <Route path="*" >
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state.ui,
});

const mapDispatchToProps = dispatch => ({
  dispatchLogout: () => dispatch(AuthMidleware.logoutRequest()),
  dispatchShowSideMenu: () => dispatch(UiMidleware.showSideMenu()),
  dispatchHideSideMenu: () => dispatch(UiMidleware.hideSideMenu()),
});


const PrivatePagesContainer = connect(mapStateToProps, mapDispatchToProps)(PrivatePages);

export default PrivatePagesContainer;