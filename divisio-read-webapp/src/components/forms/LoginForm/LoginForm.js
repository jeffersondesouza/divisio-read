import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../../ui/Input';

class LoginForm extends Component {

    handleLogin = (event) => {
        event.preventDefault();
        this.props.onLoggin();
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <div className="form-group">
                    <Input label="Email" />
                </div>
                <div className="form-group">
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