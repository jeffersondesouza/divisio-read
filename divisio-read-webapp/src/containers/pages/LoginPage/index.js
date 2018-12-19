import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/login-page.scss';

import AuthMiddleware from '../../../store/modules/auth/middleware';

import LoginForm from '../../../components/forms/LoginForm';
import PublicHeader from '../../../components/layout/PublicHeader';


class LoginPage extends Component {

    handleLogin = ({ email, password }) => {
        this.props.dispatchLogin({ email, password });
    }

    render() {
        const { auth } = this.props;

        return (
            <div className="login-page">
                <PublicHeader />
                <div className="login-page__login-wrapper">
                    <LoginForm error={auth.error} onLoggin={this.handleLogin} />
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    auth: { ...state.auth }
});

const mapDispatchToProps = dispatch => ({
    dispatchLogin: ({ email, password }) => dispatch(AuthMiddleware.loginRequest({ email, password })),
    dispatchSingUp: ({ email, password, confirmPassword }) => dispatch(AuthMiddleware.singUpRequest({ email, password, confirmPassword }))
});


const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;