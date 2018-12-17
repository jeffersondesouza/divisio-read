import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../../store/modules/books/middleware';

import BookDetailsForm from '../../components/forms/BookDetailsForm';
import BookDetails from '../../components/ui/BookDetails/BookDetails';


class BooksDetailsPage extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.dispatchLoadBook(id);
    }

    handleSaveBook = (book) => this.props.dispatchUpdateBook(book);

    handleChangeStatus = (status) => {
        this.props.dispatchUpdateBook({
            ...this.props.detailsBook,
            status
        })
    }

    render() {
        const { detailsBook, isLoadingDetailsBook } = this.props;
        return (
            <div>
                <BookDetails
                    book={detailsBook}
                    isLoadingBook={isLoadingDetailsBook}
                    onChangeStatus={this.handleChangeStatus}
                />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ...state.book,
});

const mapDispatchToProps = dispatch => ({
    dispatchLoadBook: (id) => dispatch(BookMidleware.loadBookRequest(id)),
    dispatchUpdateBook: (book) => dispatch(BookMidleware.updateBook(book)),
});

const BooksDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksDetailsPage);

export default BooksDetailsPageContainer;