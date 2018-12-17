import INITIAL_STATE from './state'

import * as ActionTypes from './constants';


function booksReducer(state = INITIAL_STATE, action) {
	switch (action.type) {

		case ActionTypes.LOAD_BOOKS_REQUEST:
			return {
				...state,
				books: [],
				isLoadingBooks: true
			}

		case ActionTypes.LOAD_BOOKS_SUCCESS:
			return {
				...state,
				books: [...action.payload.books],
				isLoadingBooks: true,
				error: null
			}

		case ActionTypes.LOAD_BOOKS_FAILURE:
			return {
				...state,
				isLoadingBooks: false,
				error: { ...action.payload.error }
			}


		case ActionTypes.SAVE_BOOKS_REQUEST:
			return {
				...state,
				isSavingBook: true
			}

		case ActionTypes.SAVE_BOOKS_SUCCESS:
			return {
				...state,
				isSavingBook: true,
				error: null
			}

		case ActionTypes.SAVE_BOOKS_FAILURE:
			return {
				...state,
				isSavingBook: false,
				error: { ...action.payload.error }
			}


		case ActionTypes.SELECT_BOOK_TO_UPDATE:
			return {
				...state,
				editingBook: { ...action.payload.book },
			}



		default:
			return state;
	}
}


export default booksReducer;
