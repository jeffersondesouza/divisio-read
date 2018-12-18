import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles/login-form.scss';

import Input from '../../ui/Input';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.onLoggin({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        const { error } = this.props;

        return (
            <form className="login-form" onSubmit={this.handleLogin}>
                <p className="login-form__error">{
                    (error)
                        ? 'A senha ou email estão incorretos'
                        : ''
                }
                </p>
                <div className="login-form__form-group">
                    <Input label="Email" onChange={email => this.setState({ email })} />
                </div>
                <div className="login-form__form-group">
                    <Input label="Senha" type="password" onChange={password => this.setState({ password })} />
                </div>
                <div className="form-actions">
                    <button className="btn">Login</button>
                </div>
                <div className="form-actions">
                    <Link to={'signup'}>Criar Conta</Link>
                </div>
            </form>
        );
    }


}


LoginForm.propTypes = {
    onLoggin: PropTypes.func,
    error: PropTypes.string,
}



export default LoginForm;