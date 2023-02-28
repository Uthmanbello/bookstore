import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import bookItems from '../redux/books/bookItems';

const Books = () => {
  return (
    <>
    {bookItems.map((item) => {
      return (
        <div>
      <h2>{item.title}</h2>
      <p>by</p>
      <p>{item.author}</p>
      <button type="button">Remove</button>
    </div>
      )
    })}
    <Form />
    </>
  )
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
