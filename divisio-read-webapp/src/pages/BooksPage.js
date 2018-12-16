import React, { Component } from 'react';
import { connect } from 'react-redux';

import UiMidleware from '../store/modules/ui/middleware';

import Header from '../components/layout/Header';
import SideMenu from '../components/ui/SideMenu';

class BooksPage extends Component {

    handleToogleShowSidemenu = () => {
        this.props.dispatchToogleSidemenu();
    }


    render() {
        return (
            <div>
                <SideMenu 
                    showSidbarMenu={this.props.showSidbarMenu} 
                    onToogleShowSidemenu={this.handleToogleShowSidemenu} />
                <Header onToogleShowSidemenu={this.handleToogleShowSidemenu} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    showSidbarMenu: state.ui.showSidbarMenu
});

const mapDispatchToProps = dispatch => ({
    dispatchToogleSidemenu: () => dispatch(UiMidleware.toogleSideMenuVisibility())
});


const BooksPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksPage);

export default BooksPageContainer;