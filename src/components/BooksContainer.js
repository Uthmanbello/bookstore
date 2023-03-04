import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/booksSlice';
import './BooksContainer.css';

const Books = () => {
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => (store.books.ifSucceed));
  const books = useSelector((store) => store.books.books);
  const isLoading = useSelector((store) => store.books.isLoading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [ifSucceed, dispatch]);

  let content;
  if (isLoading) {
    content = <p className="load">Loading...</p>;
  } else if (ifSucceed) {
    content = Object.keys(books).map((key) => {
      const currentBook = books[key][0];
      return (
        <Book
          key={key}
          id={key}
          title={currentBook.title}
          author={currentBook.author}
        />
      );
    });
  }

  return (
    <section>
      <ul>{content}</ul>
      <span className="span-form"></span>
      <h4 className="add-book-heading">ADD NEW BOOK</h4>
      <Form />
    </section>
  );
};

export default Books;
