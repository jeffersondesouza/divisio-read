import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {

    handleLogin = (event) => {
        event.preventDefault();
        this.props.onLoggin();
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <div className="form-group">
                    <label>
                        <input type="email" />
                        Email
                </label>
                </div>
                <div className="form-group">
                    <label>
                        <input type="password" />
                        Senha
                </label>
                </div>
                <div className="form-actions">
                    <button>Login</button>
                </div>
            </form>
        );
    }


}


LoginForm.propTypes = {
    onLoggin: PropTypes.func
}



export default LoginForm;