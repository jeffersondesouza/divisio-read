import * as ActionsTypes from './constants';

export default class AuthActions {

    static loginRequest({ email, password }) {
        return {
            type: ActionsTypes.LOGIN_REQUEST
        }
    }

    static loginSuccess({ token }) {
        return {
            type: ActionsTypes.LOGIN_SUCCESS,
            payload: { token }
        }
    }

    static loginFailure(error) {
        return {
            type: ActionsTypes.LOGIN_FAILURE,
            payload: { error }
        }
    }

}