import { Link } from 'react-router-dom'
import React from 'react';

import './style/books.scss';

import Books from './Book';

const renderBook = ({ book, onClick }) => (
  <li key={book._id}>
    <Link to={`books/${book._id}`}>
      <Books book={book} />
    </Link>
  </li>
);

const BooksList = ({ books, onSelectBook }) => (
  <div className="books">
    {
      books.length
        ? <ul>{books.map(book => renderBook({ book, onClick: onSelectBook }))}</ul>
        : <div>Nenhum livro cadastrado</div>
    }
  </div>
);

export default BooksList;