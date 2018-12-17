import React from 'react';

const Books = ({ book }) => (
  <div>
    <div>{book.title}</div>
    <div>{book.author}</div>
    <div>{book.pages}</div>
    <div>{book.status}</div>
  </div>
);

export default Books;