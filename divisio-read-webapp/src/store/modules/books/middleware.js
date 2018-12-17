import Actions from './action';
import bookApi from '../../api/books-api';


export default class BookMidleware {

    static loadBooksRequest() {
        return dispatch => {
            dispatch(Actions.loadBooksRequest());
            bookApi.loadBooks()
                .then(books => dispatch(Actions.loadBooksSuccess(books)))
                .catch(error => dispatch(Actions.loadBooksFailure({ error })));
        };
    }

    static loadBookRequest(id) {
        return dispatch => {
            dispatch(Actions.loadBookRequest(id));
            bookApi.loadBook(id)
                .then(book => dispatch(Actions.loadBookSuccess(book)))
                .catch(error => dispatch(Actions.loadBookFailure( error)));
        };
    }


    static reloadBooksRequest() {
        return dispatch => {
            bookApi.loadBooks()
                .then(books => dispatch(Actions.loadBooksSuccess(books)))
                .catch(error => dispatch(Actions.loadBooksFailure({ error })));
        };
    }


    static saveBook(book) {
        return dispatch => {
            dispatch(Actions.saveBookRequest(book));
            return bookApi
                .saveBook(book)
                .then(res => dispatch(Actions.saveBookSuccess()))
                .then(res => dispatch(this.reloadBooksRequest()))
                .catch(err => dispatch(Actions.saveBookFailure(err)))
        }
    }

    static updateBook(book) {
        return dispatch => {
            dispatch(Actions.updateBookRequest(book));
            return bookApi
                .saveBook(book)
                .then(res => dispatch(Actions.updateBookSuccess()))
                .then(res => dispatch(this.reloadBooksRequest()))
                .catch(err => dispatch(Actions.updateBookFailure(err)))
        }
    }

    static selectBookToUpdate(book) {
        return dispatch => {
            return dispatch(Actions.selectBookToUpdate(book));
        }
    }


}