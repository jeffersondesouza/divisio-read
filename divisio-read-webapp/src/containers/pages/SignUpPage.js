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
});

const mapDispatchToProps = dispatch => ({
});


const SignUpPageContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpPage);

export default SignUpPageContainer; SignUpPage