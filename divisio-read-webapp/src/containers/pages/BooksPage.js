import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../../store/modules/books/middleware';

import BookForm from '../../components/forms/BookForm'

class BooksPage extends Component {

    componentDidMount() {
        this.props.dispatchLoadBooks();
    }

    handleSaveBook = (book) => {
        console.log('book', book);
    }

    render() {
        return (
            <div>
                <BookForm onSaveBook={this.handleSaveBook} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ...state.book,
});

const mapDispatchToProps = dispatch => ({
    dispatchLoadBooks: () => dispatch(BookMidleware.loadBooksRequest()),
});


const BooksPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksPage);

export default BooksPageContainer;