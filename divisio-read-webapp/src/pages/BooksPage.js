import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../store/modules/books/middleware';

import Header from '../components/layout/Header';
import SideMenu from '../components/ui/SideMenu';

class BooksPage extends Component {

    componentDidMount() {
        this.props.dispatchLoadBooks();
    }


    handleToogleShowSidemenu = () => {
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
    ui: state.ui
});

const mapDispatchToProps = dispatch => ({
    dispatchLoadBooks: () => dispatch(BookMidleware.loadBooksRequest())
});


const BooksPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksPage);

export default BooksPageContainer;