import React from 'react';

const LoginForm = ({ onLoggin, onCancel }) => (
    <form onSubmit={onLoggin}>
        <div className="form-group">
            <label>
                <input type="email" />
                Email
            </label>
        </div>
        <div className="form-group">
            <label>
                <input type="email" />
                Senha
            </label>
        </div>
        <div className="form-actions">
            <button>Login</button>
        </div>
    </form>
);

export default LoginForm;