import INITIAL_STATE from './state'

import {
	TOOGLE_SIDE_MENU
} from './constants';


function uiReducer(state = INITIAL_STATE, action) {

	switch (action.type) {
		case TOOGLE_SIDE_MENU:
			return {
				...state,
				showSidbarMenu: !state.showSidbarMenu

			}
		default:
			return state;
	}
}


export default uiReducer;
