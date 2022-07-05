import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li key={id} className={s.imageGalleryItem}>
      <img src={webformatURL} alt="" className={s.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
