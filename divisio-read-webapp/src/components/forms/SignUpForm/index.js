import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles/sign-up-form.scss';

import Input from '../../ui/Input';

class SignUpForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      confirmPasswordError: '',
    }
  }

  handleSighUp = (event) => {
    event.preventDefault();

    if (this.props.isSigningUp) {
      return;
    }

    if (this.state.password && this.state.password === this.state.confirmPassword) {
      this.props.onSignUp({
        email: this.state.email,
        password: this.state.password,
      });
      this.setState({ confirmPasswordError: '' });

    } else {
      this.setState({ confirmPasswordError: 'A senha e confirmação devem ser iguais' });
    }
  }

  render() {
    const { error, isSigningUp } = this.props;

    return (
      <form className="sign-up-form" onSubmit={this.handleSighUp}>
        <p className="sign-up-form__error">{this.state.confirmPasswordError}</p>
        <div className="sign-up-form__form-group">
          <Input label="Email" onChange={email => this.setState({ email })} />
        </div>
        <div className="sign-up-form__form-group">
          <Input label="Senha" type="password" onChange={password => this.setState({ password })} />
        </div>
        <div className="sign-up-form__form-group">
          <Input label="Confirmar Senha" type="password" onChange={confirmPassword => this.setState({ confirmPassword })} />
        </div>
        <div className="form-actions">
          <button className="btn">
            {
              isSigningUp
                ? 'Aguarde...'
                : 'Criar Conta'
            }
          </button>
        </div>
        <div className="form-actions">
          <Link to={'/'}>Login</Link>
        </div>
      </form>
    );
  }


}


SignUpForm.propTypes = {
  onSignUp: PropTypes.func,
  error: PropTypes.string,
  isSigningUp: PropTypes.bool,

}



export default SignUpForm;