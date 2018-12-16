import React, { Component } from 'react';
import { connect } from 'react-redux';


class SignUpPage extends Component {
    render() {
        return (
            <div>
                SignUpPage
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


const SignUpPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

export default SignUpPageContainer; SignUpPage