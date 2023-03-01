import React from 'react';
import Form from './Form';
import bookItems from '../redux/books/bookItems';

const Books = () => (
  <>
    {bookItems.map((item) => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>by</p>
        <p>{item.author}</p>
        <button type="button">Remove</button>
      </div>
    ))}
    <Form />
  </>
);

export default Books;
