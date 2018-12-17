import React from 'react';

import './styles/select-book-status.scss';

import BookStatusIcon from '../BookStatusIcon';

const SelectBookStatus = ({ value, onChange }) => (
  <div className="select-book-status">
    <BookStatusIcon type='book' />
    <BookStatusIcon type='eye' />
    <BookStatusIcon type='checkmark' />
    <BookStatusIcon type='cross' />  
  </div>
);

export default SelectBookStatus;