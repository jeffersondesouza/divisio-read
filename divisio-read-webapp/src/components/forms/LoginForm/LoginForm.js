import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/login-form.scss';

import Input from '../../ui/Input';

class LoginForm extends Component {

    handleLogin = (event) => {
        event.preventDefault();
        this.props.onLoggin();
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleLogin}>
                <div className="login-form__form-group">
                    <Input label="Email" />
                </div>
                <div className="login-form__form-group">
                    <Input label="Senha" type="password" />
                </div>
                <div className="form-actions">
                    <button className="btn">Login</button>
                </div>
            </form>
        );
    }


}


LoginForm.propTypes = {
    onLoggin: PropTypes.func
}



export default LoginForm;