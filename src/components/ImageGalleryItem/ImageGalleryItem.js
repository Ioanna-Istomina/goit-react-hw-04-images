import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, onClick }) => {
  const clickModal = () => {
    onClick(largeImageURL);
  };
  return (
    <li key={id} className={s.imageGalleryItem} onClick={clickModal}>
      <img src={webformatURL} alt="" className={s.imageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
