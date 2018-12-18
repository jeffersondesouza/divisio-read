import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthMidleware from '../../store/modules/auth/middleware';
import UiMidleware from '../../store/modules/ui/middleware';

import Header from '../../components/layout/Header';
import SideMenu from '../../components/ui/SideMenu';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BooksPage from './BooksPage';
import BooksDetailsPage from './BooksDetailsPage';

class PrivatePages extends Component {

    handleToogleShowSidemenu = () => {
        this.props.dispatchToogleSideMenuVisibility();
    }

    handleLogout = () => {
        this.props.dispatchLogout();
    }

    render() {
        console.log(this.props.showSidbarMenu);
        
        return (
            <div>
                <SideMenu
                    showSidbarMenu={this.props.showSidbarMenu}
                    onLogout={this.handleLogout}
                    onToogleShowSidemenu={this.handleToogleShowSidemenu}
                />
                <Header onToogleShowSidemenu={this.handleToogleShowSidemenu} />
                <Switch>
                    <Route path="/books" component={BooksPage} exact />
                    <Route path="/books/:id" component={BooksDetailsPage} exact />
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    showSidbarMenu: state.ui.showSidbarMenu
});

const mapDispatchToProps = dispatch => ({
    dispatchLogout: () => dispatch(AuthMidleware.logoutRequest()),
    dispatchToogleSideMenuVisibility: () => dispatch(UiMidleware.toogleSideMenuVisibility()),
});


const PrivatePagesContainer = connect(mapStateToProps, mapDispatchToProps)(PrivatePages);

export default PrivatePagesContainer;