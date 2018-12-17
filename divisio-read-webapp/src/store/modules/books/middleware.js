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

    static saveBook(book) {
        return dispatch => {
            dispatch(Actions.saveBookRequest(book));

            return bookApi
                .saveBook(book)
                .then(res => dispatch(Actions.saveBookSuccess()))
                .catch(err => dispatch(Actions.saveBookFailure(err)))

        }
    }

}