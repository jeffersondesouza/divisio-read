import INITIAL_STATE from './state'

import * as actionsTypes from './constants';


function uiReducer(state = INITIAL_STATE, action) {
console.log('action', action);

	switch (action.type) {

		case actionsTypes.HIDE_SIDE_MENU:
			return {
				...state,
				showSidbarMenu: false
			}

		case actionsTypes.SHOW_SIDE_MENU:
			return {
				...state,
				showSidbarMenu: true
			}


		case actionsTypes.HIDE_BOOK_CREATION_FORM:
			return {
				...state,
				showBookCreationForm: false
			}

		case actionsTypes.SHOW_BOOK_CREATION_FORM:
			return {
				...state,
				showBookCreationForm: true
			}

		default:
			return state;
	}
}


export default uiReducer;
