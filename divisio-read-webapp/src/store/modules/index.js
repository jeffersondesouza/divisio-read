import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';
import bookReducer from './books/reducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    book: bookReducer
});

export default rootReducer;
