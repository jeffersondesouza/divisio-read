import Actions from './actions';
import authApi from '../../api/auth-api';
import {setUserToken } from '../../../utils/LocalStorageManager';
import { redirectToWelcomePage } from '../../../utils/RouterRedirector';

export default class AuthMidleware {

    static loginRequest({ email, password }) {
        return dispatch => {
            dispatch(Actions.loginRequest({ email, password }));
            authApi.login({ email, password })
                .then(data => {
                    setUserToken(data.token);
                    redirectToWelcomePage();
                    return dispatch(Actions.loginSuccess({ token:data.token }));
                })
                .catch(error => dispatch(Actions.loginFailure({ error })));
        };
    }

}