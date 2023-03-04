import PropTypes from 'prop-types';

const RemoveButton = (props) => {
  const { onClick } = props;
  return (
    <button type="button" className="action author-text" onClick={onClick}>
      Remove
    </button>
  );
};

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RemoveButton;
