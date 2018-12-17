import { Link } from 'react-router-dom'
import React from 'react';
import Books from './Book';

const renderBook = ({ book, onClick }) => (
  <li key={book._id}>
    <Link to={`books/${book._id}`}>
      <Books book={book} />
    </Link>
  </li>
);

const BooksList = ({ books, count, onSelectBook }) => (
  <div>
    <ul>{books.map(book => renderBook({ book, onClick: onSelectBook }))}</ul>
  </div>
);

export default BooksList;