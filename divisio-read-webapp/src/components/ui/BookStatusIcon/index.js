import React from 'react';
import IcoMoon from 'react-icomoon';
import './style/book-status-icon.scss';

const BookStatusIcon = ({ value, onChange, type }) => (
  <label className="book-status-icon">
    <div className={`book-status-icon__btn book-status-icon__btn--${type || 'book'}`}>
      <IcoMoon icon={type || 'book'} className="book-status-icon__icon" />
      <input
        name="status"
        value="fechado"
        type="radio"
        className="book-status-icon__checkbox"
      />
    </div>
    <span className="input__label" className="book-status-icon__label">Fechado</span>
  </label>
);

export default BookStatusIcon;

/* 
<IcoMoon icon="book" />
<IcoMoon icon="checkmark" />
<IcoMoon icon="clock" />
<IcoMoon icon="eye" />
<IcoMoon icon="cross" />
<IcoMoon icon="plus" />
*/
