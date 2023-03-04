import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import RemoveButton from './RemoveButton';
import { removeBook } from '../redux/books/booksSlice';
import './Book.css';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="list-container">
      <div className="list-item">
        <p className="action-text"><b>Action</b></p>
        <h2 className="title-text">{title}</h2>
        <p className="author-text">{author}</p>
        <div>
          <button className="action author-text" type="button">Comments</button>
          <span className="divisor" />
          <RemoveButton onClick={handleRemove} />
          <span className="divisor" />
          <button className="action author-text" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar">
          <CircularProgressbar value={75} />
        </div>
        <p className="percentage-complete">
          <span className="percent">64%</span>
          <span className="completion">Completed</span>
        </p>
      </div>
      <div>
        <p className="completion">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
