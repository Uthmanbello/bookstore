import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [formInputs, setFormInputs] = useState({ title: '', author: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      item_id: id,
      category: 'Fiction',
      ...formInputs,
    };
    dispatch(addBook(newBook));
    setFormInputs({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setFormInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          type="text"
          className="add-input add-title"
          placeholder="Book title"
          name="title"
          value={formInputs.title}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="author">
        <input
          type="text"
          className="add-input add-author"
          placeholder="Book author"
          name="author"
          value={formInputs.author}
          onChange={handleChange}
          required
        />
      </label>
      <button className="update-btn add-btn" type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
