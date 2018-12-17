import React from 'react';
import './styles/input.scss';

const Input = ({ label, value, type, onChange }) => {

  return (
    <div className="input-group">
      <label className="input-group__wrapper">
        <input
          required
          className="input-group__input"
          type={type || 'text'}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <span className="input-group__label">{label}</span>
      </label>
    </div>
  );
}
export default Input;