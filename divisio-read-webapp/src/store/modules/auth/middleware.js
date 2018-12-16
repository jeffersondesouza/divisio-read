import Actions from './actions';
import authApi from '../../api/auth-api';

export default class AuthMidleware {

    static loadBooksRequest({ email, password }) {
        return dispatch => {
            dispatch(Actions.loginRequest({ email, password }));
            authApi.login({ email, password })
                .then(token => dispatch(Actions.loginSuccess({ token })))
                .catch(error => dispatch(Actions.loginFailure({ error })));
        };
    }

}