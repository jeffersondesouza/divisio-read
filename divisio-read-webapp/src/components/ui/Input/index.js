import React from 'react';

const Input = ({ label, value, type, onChange }) => (
  <div className="input">
    <label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        className="input__inpit" type={type || 'text'}
      />
      <span className="input__label">{label}</span>
    </label>
  </div>
);

export default Input;