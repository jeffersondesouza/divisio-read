import INITIAL_STATE from './state'

import * as actionsTypes from './constants';


function uiReducer(state = INITIAL_STATE, action) {

	switch (action.type) {
		case actionsTypes.TOOGLE_SIDE_MENU:
			return {
				...state,
				showSidbarMenu: !state.showSidbarMenu

			}
		default:
			return state;
	}
}


export default uiReducer;
