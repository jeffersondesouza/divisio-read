import UiActions from './action';

export default class UiMidleware {
    static toogleSideMenuVisibility() {
        return dispatch => dispatch(UiActions.toogleSideMenuVisibility());
    }
}