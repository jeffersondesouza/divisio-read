import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookMidleware from '../../store/modules/books/middleware';

import BookDetails from '../../components/ui/BookDetails';


class BooksDetailsPage extends Component {

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.dispatchLoadBook(id);
    }

    handleSaveBook = (book) => this.props.dispatchUpdateBook(book);

    handleChangeStatus = (status) => {
        if (status !== 'delete') {
            this.props.dispatchUpdateBook({
                ...this.props.detailsBook,
                status
            });
        }
    }

    hadleDelete = () => {
        const configAction = confirm(`Tem centerza que deseja excluir o livro: ${this.props.detailsBook.title}`)

        if (configAction) {
            this.props.dispatchDeleteBook(this.props.detailsBook._id);
        }
    }

    render() {
        const { detailsBook, isLoadingDetailsBook } = this.props;
        return (
            <div>
                <BookDetails
                    book={detailsBook}
                    isLoadingBook={isLoadingDetailsBook}
                    onChangeStatus={this.handleChangeStatus}
                    onDelete={this.hadleDelete}
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
    dispatchDeleteBook: (id) => dispatch(BookMidleware.deleteBook(id)),
});

const BooksDetailsPageContainer = connect(mapStateToProps, mapDispatchToProps)(BooksDetailsPage);

export default BooksDetailsPageContainer;