import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  <li className={s.imageGalleryItem}>
    <img src={webformatURL} alt="" className={s.imageGalleryItemImage} />
  </li>;
};

export default ImageGalleryItem;
