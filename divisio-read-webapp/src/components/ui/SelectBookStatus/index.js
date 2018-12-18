import React from 'react';

import './styles/select-book-status.scss';

import BookStatusIcon from '../BookStatusIcon';

const SelectBookStatus = ({showLabel, value, onChange, onDelete, hideDeleteOption }) => (
  <div className="select-book-status">
    <BookStatusIcon showLabel={showLabel} status="closed" onChange={e => onChange('closed')} type='book' />
    <BookStatusIcon showLabel={showLabel} status="reading" onChange={e => onChange('reading')} type='eye' />
    <BookStatusIcon showLabel={showLabel} status="finished" onChange={e => onChange('finished')} type='checkmark' />
  </div>
);

export default SelectBookStatus;

/* {
  hideDeleteOption
    ? ''
    :<div onClick={onDelete}>
      <BookStatusIcon  showLabel={showLabel} status="delete" type='cross' />
    </div> 
}
 */