import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../../store/modules/books/middleware';

import BookForm from '../../components/forms/BookForm'
import BooksList from '../../components/lists/BooksList';

class BooksPage extends Component {

    componentDidMount() {
        this.props.dispatchLoadBooks();
    }

    handleSaveBook = (book) => this.props.dispatchSaveBook(book);

    render() {
        console.log(this.props.books);
        
        return (
            <div>
                <BookForm onSaveBook={this.handleSaveBook} />
                <BooksList books={this.props.books} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ...state.book,
});

const mapDispatchToProps = dispatch => ({
    dispatchLoadBooks: () => dispatch(BookMidleware.loadBooksRequest()),
    dispatchSaveBook: (book) => dispatch(BookMidleware.saveBook(book)),
});


const BooksPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksPage);

export default BooksPageContainer;