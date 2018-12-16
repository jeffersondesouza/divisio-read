import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from '../components/forms/LoginForm/LoginForm';


class LoginPage extends Component {
    render() {
        return (
            <div>
                <LoginForm />
            </div>
        );
    }
}


const mapStateToProps = state => ({
    showSidbarMenu: state.ui.showSidbarMenu
});

const mapDispatchToProps = dispatch => ({
    dispatchLogin: () => dispatch(UiMidleware.toogleSideMenuVisibility())
});


const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;