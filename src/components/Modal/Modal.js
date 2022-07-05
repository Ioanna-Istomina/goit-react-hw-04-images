import s from './Modal.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
class Modal extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = ev => {
    if (ev.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img src={image} alt="alt" />
        </div>
      </div>
    );
  }
}
export default Modal;
