import React from 'react';
import BookStatusIcon from '../../ui/BookStatusIcon';

const Books = ({ book, onClick }) => (
  <div onClick={onClick} className="book">
    <div className="book__info">
      <div className="book__title">{book.title}</div>
      <div className="book__author">{book.author}</div>
      <div className="book__pages">{book.pages}&nbsp;pg</div>
    </div>
    <div className="book__status">
      <BookStatusIcon status={book.status} showLabel={false} />
    </div>
  </div>
);

export default Books;