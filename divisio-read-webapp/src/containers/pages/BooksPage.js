import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../../store/modules/books/middleware';

import BookForm from '../../components/forms/BookForm'
import BooksList from '../../components/lists/BooksList';

class BooksPage extends Component {

  componentDidMount() {
    this.props.dispatchLoadBooks();
  }

  handleSaveBook = (book) => {
    if (this.props.editingBookMode) {
      this.props.dispatchSaveBook(book);
      return;
    }
    this.props.dispatchUpdateBook(book);
  }

  handleSelectBook = book => this.props.dispatchSelectBookToUpdate(book);

  render() {
    const { editingBook, books, count } = this.props;
    console.log('props', this.props);

    return (
      <div>
        <BookForm
          count={count}
          editingBook={editingBook}
          onSaveBook={this.handleSaveBook}
        />
        <BooksList
          books={books}
        />
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
  dispatchUpdateBook: (book) => dispatch(BookMidleware.updateBook(book)),
  dispatchSelectBookToUpdate: (book) => dispatch(BookMidleware.selectBookToUpdate(book)),
});


const BooksPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksPage);

export default BooksPageContainer;