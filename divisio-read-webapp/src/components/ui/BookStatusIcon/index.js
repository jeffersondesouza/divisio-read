import React from 'react';
import IcoMoon from 'react-icomoon';
import './style/book-status-icon.scss';


const statusIconType = (status) => {
  const statusType = {
    closed: 'book',
    reading: 'eye',
    finished: 'checkmark',
    delete: 'cross'
  }
  return statusType[status] || 'book';
};

const typeLabel = (type) => {
  const statusType = {
    book: 'Fechado',
    eye: 'Lendo',
    checkmark: 'finalizado',
  }
  return statusType[type] || 'book';
};


const renderLabel = (showLabel, type) => (showLabel
  ? <span className="input__label" className="book-status-icon__label">
    {typeLabel(type)}
  </span>
  : ''
);

const BookStatusIcon = ({ status, onChange, type, showLabel }) => {

  const statusType = statusIconType(status);

  return (
    <label className="book-status-icon">
      <input
        name="status"
        type="radio"
        className="book-status-icon__checkbox"
        onChange={onChange}
      />
      <div className={`book-status-icon__btn book-status-icon__btn--${statusType || 'book'}`}>
        <IcoMoon icon={statusType} className="book-status-icon__icon" />
      </div>
      {
        renderLabel(showLabel, type)
      }
    </label>
  );
}

export default BookStatusIcon;

/*
<IcoMoon icon="book" />
<IcoMoon icon="checkmark" />
<IcoMoon icon="eye" />



<IcoMoon icon="clock" />
<IcoMoon icon="cross" />
<IcoMoon icon="plus" />
*/
