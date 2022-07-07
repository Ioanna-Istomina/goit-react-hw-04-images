import s from './Modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = ev => {
    if (ev.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      {' '}
      <div className={s.modal}>
        <img src={image} alt="alt" />{' '}
      </div>{' '}
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
