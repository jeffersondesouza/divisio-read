import INITIAL_STATE from './state'

import {
	LOAD_BOOKS_REQUEST,
	LOAD_BOOKS_SUCCESS,
	LOAD_BOOKS_FAILURE
} from './constants';


function booksReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case LOAD_BOOKS_REQUEST:
			return {
				...state,
				books: [],
				isLoadingBooks: true
			}
		case LOAD_BOOKS_SUCCESS:
		
			return {
				...state,
				books: [...action.payload.books],
				isLoadingBooks: true,
				error: null
			}
		case LOAD_BOOKS_FAILURE:
			return {
				...state,
				isLoadingBooks: false,
				error: { ...action.payload.error }
			}

		default:
			return state;
	}
}


export default booksReducer;
