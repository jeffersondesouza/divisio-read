import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../../store/modules/books/middleware';

import BookDetailsForm from '../../components/forms/BookDetailsForm';

class BooksDetailsPage extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        console.log('handle', id);
        this.props.dispatchLoadBook(id);
    }

    handleSaveBook = (book) => this.props.dispatchUpdateBook(book);



    render() {
        const { editingBook } = this.props;
        return (
            <div>
                <BookDetailsForm
                    editingBook={editingBook}
                    onSaveBook={this.handleSaveBook}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ...state.book,
});

const mapDispatchToProps = dispatch => ({
    dispatchUpdateBook: (book) => dispatch(BookMidleware.updateBook(book)),
    dispatchLoadBook: (id) => dispatch(BookMidleware.loadBookRequest(id))
});

const BooksDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksDetailsPage);

export default BooksDetailsPageContainer;