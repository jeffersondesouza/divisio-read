import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/login-page.scss';


import AuthMiddleware from '../../store/modules/auth/middleware';
import SignUpForm from '../../components/forms/SignUpForm';

const logo = '../src/assets/logo.png';

class SignUpPage extends Component {

    handleSignUp = ({ email, password }) => {
        this.props.dispatchSingUp({ email, password, password });
    }

    render() {
        const {error,  isSigningUp } = this.props;

        return (
            <div className="login-page">
                <header className="login-page__header">
                    <figure className="login-page__logo-fig">
                        <img className="login-page__logo-img" src={logo}></img>
                    </figure>
                    <div className="login-page__headind">
                        <h2 className="login-page__title">Divisio Read</h2>
                        <h3 className="login-page__sub-title">Gerencie e mantenha sua leitura em dias</h3>
                    </div>
                </header>
                <div className="login-page__login-wrapper">
                    <SignUpForm isSigningUp={isSigningUp} error={error} onSignUp={this.handleSignUp} />
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = dispatch => ({
    dispatchLogin: ({ email, password }) => dispatch(AuthMiddleware.loginRequest({ email, password })),
    dispatchSingUp: ({ email, password, confirmPassword }) => dispatch(AuthMiddleware.singUpRequest({ email, password, confirmPassword }))
});


const SignUpPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

export default SignUpPageContainer;