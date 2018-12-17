import React from 'react';
import Books from './Book';

const renderBook = ({ book, onClick }) => (
  <li key={book._id}>
    <Books book={book} onClick={() => onClick(book)} />
  </li>
);

const BooksList = ({ books, count, onSelectBook }) => (
  <div>
    <ul>{books.map(book => renderBook({ book, onClick: onSelectBook }))}</ul>
  </div>
);

export default BooksList;