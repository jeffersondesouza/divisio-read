import { Link } from 'react-router-dom'
import React from 'react';

import './style/books.scss';

import Books from './Book';
import ErrorMessage from '../../ui/ErrorMessage';


const renderBook = ({ book, onClick }) => (
  <li key={book._id}>
    <Link to={`books/${book._id}`}>
      <Books book={book} />
    </Link>
  </li>
);

const BooksList = ({ books, isLoadingBooks, onSelectBook }) => (
  <div className="books">
    {
      (isLoadingBooks)
        ? <p>Loading...</p>
        : (<div>
          {
            (books.length)
              ? <ul>{books.map(book => renderBook({ book, onClick: onSelectBook }))}</ul>
              : <ErrorMessage text="Nenhum livro cadastrado, Clique no botão com ícone de '+' para cadastrar" />
          }
        </div>)
    }
  </div>
);

export default BooksList;