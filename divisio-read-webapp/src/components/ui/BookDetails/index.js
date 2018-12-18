import React from 'react';

import './styles/book-details.scss';

import SelectBookStatus from '../SelectBookStatus';
import BookDetailsHeader from './BookDetailsHeader';

const renderBook = ({ book, onDelete, onChangeStatus, onEditStatus }) => (
  <div className="book-details">
    <BookDetailsHeader book={book} />
    <div className="book-details__status">
      <p className="book-details__status-call-action">Choose a Reading Status</p>
      <SelectBookStatus
        showLabel={true}
        value={book.status}
        onChange={onChangeStatus}
        onDelete={onDelete} />
    </div>

    <div className="book-details__delete">
      <button type="botton" className="btn btn--delete" onClick={onDelete} >Delete</button>
    </div>
  </div>
);

const BookDetails = ({ book, isLoadingBook, onDelete, onChangeStatus, onEditStatus }) => (
  <div>
    {
      isLoadingBook
        ? <div>loading...</div>
        : renderBook({ book, onChangeStatus, onDelete })
    }
  </div>
);

export default BookDetails;
