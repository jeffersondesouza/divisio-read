import * as Action from './constants';

export default class BooksActions {

    static loadBooksRequest() {
        return {
            type: Action.LOAD_BOOKS_REQUEST
        }
    }

    static loadBooksSuccess(books) {
        return {
            type: Action.LOAD_BOOKS_SUCCESS,
            payload: { books }
        }
    }

    static loadBooksFailure(error) {
        return {
            type: Action.LOAD_BOOKS_FAILURE,
            payload: { error }
        }
    }

}