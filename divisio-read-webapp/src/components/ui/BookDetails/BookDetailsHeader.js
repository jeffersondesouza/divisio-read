import React from 'react';

import './styles/book-details-header.scss';

import BookStatusIcon from '../BookStatusIcon';

const BookDetailsHeader = ({ book }) => (
  <header className="book-details-header">
    <div className="book-details-header__info">
      <h3 className="book-details-header__title">{book.title}</h3>
      <div className="book-details-header__author">{book.author}</div>
      <div className="book-details-header__pages">{book.pages} páginas</div>
    </div>
    <div className="book-details-header__status">
      <BookStatusIcon status={book.status} showLabel={false} />
    </div>
  </header>
);

export default BookDetailsHeader;
