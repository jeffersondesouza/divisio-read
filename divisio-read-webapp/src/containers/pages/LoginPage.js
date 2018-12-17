import React, { Component } from 'react';
import { connect } from 'react-redux';


import AuthMiddleware from '../../store/modules/auth/middleware';

import LoginForm from '../../components/forms/LoginForm/LoginForm';


class LoginPage extends Component {

    handleLogin = () => {
        this.props.dispatchLogin({ email: 'joao@email.com', password: '123' });
    }

    render() {
        return (
            <div>
                <LoginForm onLoggin={this.handleLogin} />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    ui: { ...state.ui }
});

const mapDispatchToProps = dispatch => ({
    dispatchLogin: ({ email, password }) => dispatch(AuthMiddleware.loginRequest({ email, password }))
});


const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;