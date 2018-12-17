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

    static saveBookRequest(book) {
        return {
            type: Action.LOAD_BOOKS_REQUEST,
            payload: { book }
        }
    }

    static saveBookSuccess() {
        return {
            type: Action.LOAD_BOOKS_SUCCESS,
        }
    }

    static saveBookFailure(error) {
        return {
            type: Action.LOAD_BOOKS_FAILURE,
            payload: { error }
        }
    }

    static selectBootToUpdate(book) {
        return {
            type: Action.SELECT_BOOK_TO_UPDATE,
            payload: { book }
        }
    }


}