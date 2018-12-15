import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';

const rootReducer = combineReducers({
    ui: uiReducer
}); 

export default rootReducer;
