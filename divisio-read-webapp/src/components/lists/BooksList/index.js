import React from 'react';
import Books from './Book';

const renderBook = (book) => (
  <li key={book._id}>
    <Books book={book} />
  </li>
);

const BooksList = ({ books, count }) => (
  <ul>{books.map(renderBook)}</ul>
);

export default BooksList;