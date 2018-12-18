import React from 'react';
import SelectBookStatus from '../SelectBookStatus';


const renderBook = ({ book, onDelete, onChangeStatus, onEditStatus }) => (
  <div>
    <div>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.pages}</div>
      <div>{book.status}</div>
    </div>
    <div>
      <button type="botton" onClick={onDelete} >Delete</button>
    </div>
    <div>
      <SelectBookStatus value={book.status} onChange={onChangeStatus} />
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
