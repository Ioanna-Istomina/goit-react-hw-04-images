import s from './Button.module.css';
const Button = ({ onNextFetch }) => {
  return (
    <button className={s.button} type="button" onClick={onNextFetch}>
      Load more
    </button>
  );
};

export default Button;
