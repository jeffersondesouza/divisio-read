import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../../store/modules/books/middleware';
import UiMidleware from '../../store/modules/ui/middleware';

import BookForm from '../../components/forms/BookForm'
import BooksList from '../../components/lists/BooksList';

class BooksPage extends Component {

  componentDidMount() {
    this.props.dispatchLoadBooks();
  }

  handleSaveBook = (book) => {
    this.props.dispatchSaveBook(book)
      .then(() => this.props.dispatchHideCreationBookForm());
  }


  handleShowCreationBookForm = () => this.props.dispatchShowCreationBookForm();

  handleHideCreationBookForm = () => this.props.dispatchHideCreationBookForm();


  rendeCreateBookForm = showElement => (showElement
    ? <BookForm
      showBookCreationForm={showBookCreationForm}
      onSaveBook={this.handleSaveBook}
      onHideForm={this.handleHideCreationBookForm}
    />
    : ''
  );

  render() {
    const { books, showBookCreationForm } = this.props;
    return (
      <div>
        <BookForm
          showBookCreationForm={showBookCreationForm}
          onSaveBook={this.handleSaveBook}
          onHideForm={this.handleHideCreationBookForm}
        />
        <BooksList books={books} />

        {
          !showBookCreationForm
            ? <button type="button" className="btn-float" onClick={this.handleShowCreationBookForm}>+</button>
            : ''
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state.book,
  showBookCreationForm: state.ui.showBookCreationForm
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadBooks: () => dispatch(BookMidleware.loadBooksRequest()),
  dispatchSaveBook: (book) => dispatch(BookMidleware.saveBook(book)),
  dispatchUpdateBook: (book) => dispatch(BookMidleware.updateBook(book)),
  dispatchSelectBookToUpdate: (book) => dispatch(BookMidleware.selectBookToUpdate(book)),

  dispatchShowCreationBookForm: () => dispatch(UiMidleware.showBookCreationForm()),
  dispatchHideCreationBookForm: () => dispatch(UiMidleware.hideCreationBookForm()),

});


const BooksPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksPage);

export default BooksPageContainer;