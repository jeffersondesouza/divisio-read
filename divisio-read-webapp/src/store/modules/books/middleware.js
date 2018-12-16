import ActionsTypes from './action';
import bookApi from '../../api/books-api';


export default class BookMidleware {

    static loadBooksRequest() {
        return dispatch => {
            dispatch(ActionsTypes.loadBooksRequest());
            bookApi.loadBooks()
                .then(books => dispatch(ActionsTypes.loadBooksSuccess(books)))
                .catch(error => dispatch(ActionsTypes.loadBooksFailure({ error })));
        };
    }

}