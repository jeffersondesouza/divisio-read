import React from 'react';

import './styles/select-book-status.scss';

import BookStatusIcon from '../BookStatusIcon';

const SelectBookStatus = ({ value, onChange }) => (
  <div className="select-book-status">
    <BookStatusIcon status="closed" onChange={e=> onChange('fechado')} type='book' />
    <BookStatusIcon status="readig" onChange={e=> onChange('lendo')} type='eye' />
    <BookStatusIcon status="finished" onChange={e=> onChange('finalizado')} type='checkmark' />
    <BookStatusIcon status="delete" onChange={e=> onChange('deletar')} type='cross' />  
  </div>
);

export default SelectBookStatus;