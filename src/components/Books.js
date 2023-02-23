import React from 'react';
import Form from './Form'

const Books = (props) => (
    <>
      <div>
        <h2>{props.title}</h2>
        <p>by {props.author}</p>
        <button>Remove</button>
      </div>
      <Form />
    </>
  );
  
  export default Books;