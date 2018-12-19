import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/signup-page.scss';

import AuthMiddleware from '../../store/modules/auth/middleware';
import SignUpForm from '../../components/forms/SignUpForm';
import PublicHeader from '../../components/layout/PublicHeader';

class SignUpPage extends Component {

    handleSignUp = ({ email, password }) => {
        this.props.dispatchSingUp({ email, password, password });
    }

    render() {
        const { error, isSigningUp } = this.props;
        return (
            <div className="signup-page">
                <PublicHeader />
                <div className="signup-page__login-wrapper">
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