import React from 'react';
import IcoMoon from 'react-icomoon';
import './style/book-status-icon.scss';

const white = '#ffffff';
const black = '#000000';
const orange = '#fb812c';
const red = '#d10403';
const blue = '#5f8dd3';

/* 
      <IcoMoon icon="book" />
      <IcoMoon icon="checkmark" />
      <IcoMoon icon="clock" />
      <IcoMoon icon="eye" />
      <IcoMoon icon="cross" />
      <IcoMoon icon="plus" />

      */
const BookStatusIcon = ({ value, onChange, type }) => (
  <label className="book-status-icon">
    <div className={`book-status-icon__btn book-status-icon__btn--${type}`}>
      <IcoMoon icon={type} className="book-status-icon__icon" />
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