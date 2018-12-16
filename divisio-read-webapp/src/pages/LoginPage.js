import React, { Component } from 'react';
import { connect } from 'react-redux';


class LoginPage extends Component {
    render() {
        return (
            <div>
                login
            </div>
        );
    }
}


const mapStateToProps = state => ({
    showSidbarMenu: state.ui.showSidbarMenu
});

const mapDispatchToProps = dispatch => ({
    dispatchToogleSidemenu: () => dispatch(UiMidleware.toogleSideMenuVisibility())
});


const LoginPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;