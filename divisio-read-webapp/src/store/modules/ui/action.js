import {
    TOOGLE_SIDE_MENU
} from './constants';

export default class UIAction {
    
    static toogleSideMenuVisibility() {
        return {
            type: TOOGLE_SIDE_MENU
        }
    }
    
}