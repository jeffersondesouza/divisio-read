import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/login-page.scss';


import AuthMiddleware from '../../store/modules/auth/middleware';
import LoginForm from '../../components/forms/LoginForm/LoginForm';

const logo = '../src/assets/logo.png';

class LoginPage extends Component {

    handleLogin = () => {
        this.props.dispatchLogin({ email: 'joao@email.com', password: '123' });
    }

    render() {
        return (
            <div className="login-page">
                <header className="login-page__header">
                    <figure className="login-page__logo-fig">
                        <img className="login-page__logo-img" src={logo}></img>
                    </figure>
                    <h2 className="login-page__title">Divisio Read</h2>
                    <h3 className="login-page__sub-title">Gerencie e mantenha sua leitura em dias</h3>
                </header>
                <div className="login-page__login-wrapper">
                    <LoginForm onLoggin={this.handleLogin} />
                </div>

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