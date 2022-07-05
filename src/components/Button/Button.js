import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onNextFetch }) => {
  return (
    <button className={s.button} type="button" onClick={onNextFetch}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onNextFetch: PropTypes.func.isRequired,
};
export default Button;
