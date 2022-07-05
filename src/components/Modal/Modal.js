import s from './Modal.module.css';

const Modal = ({ largeImageURL }) => {
  return (
    <div class={s.overlay}>
      <div class={s.modal}>
        <img src={largeImageURL} alt="alt" />
      </div>
    </div>
  );
};
export default Modal;
