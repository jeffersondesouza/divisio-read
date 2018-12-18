import UiActions from './action';

export default class UiMidleware {

    static showBookCreationForm() {
        return dispatch => dispatch(UiActions.showBookCreationForm());
    }

    static hideCreationBookForm() {
        return dispatch => dispatch(UiActions.hideCreationBookForm());
    }

    static showSideMenu() {
        return dispatch => dispatch(UiActions.showSideMenu());
    }

    static hideSideMenu() {
        return dispatch => dispatch(UiActions.hideSideMenu());
    }

    static showmMainSandwishMenu() {
        return dispatch => dispatch(UiActions.showmMainSandwishMenu());
    }

    static showMainReturnHeaderButton() {
        return dispatch => dispatch(UiActions.showMainReturnHeaderButton());
    }

}