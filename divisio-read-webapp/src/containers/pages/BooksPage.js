import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../../store/modules/books/middleware';

import Header from '../../components/layout/Header';
import SideMenu from '../../components/ui/SideMenu';
import UiMidleware from '../../store/modules/ui/middleware';

class BooksPage extends Component {

    componentDidMount() {
        this.props.dispatchLoadBooks();
    }


    handleToogleShowSidemenu = () => {
        this.props.dispatchToogleSideMenuVisibility();
    }


    render() {
        console.log(this.props);


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
    ...state.book,
    showSidbarMenu: state.ui.showSidbarMenu
});

const mapDispatchToProps = dispatch => ({
    dispatchLoadBooks: () => dispatch(BookMidleware.loadBooksRequest()),
    dispatchToogleSideMenuVisibility: () => dispatch(UiMidleware.toogleSideMenuVisibility()),
});


const BooksPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksPage);

export default BooksPageContainer;