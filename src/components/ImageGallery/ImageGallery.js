import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button';
import fetchImages from '../../service/images-api';
import Modal from 'components/Modal';

const ImageGallery = ({ query, page, changePage }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);

    fetchImages(query, page)
      .then(res => res.json())
      .then(result =>
        setImages(prevState =>
          page > 1 ? [...prevState, ...result.hits] : result.hits
        )
      )
      .finally(() => setLoading(false));
  }, [query, page]);

  const onNextFetch = () => {
    changePage(page + 1);
  };

  const toogleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = imagesUrl => {
    setShowModal(!showModal);
    setUrl(imagesUrl);
  };

  return (
    <>
      {showModal && <Modal image={url} onClose={toogleModal} />}
      {loading && <Loader />}
      <ul className={s.imageGallery}>
        {images?.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            onClick={openModal}
          />
        ))}
      </ul>
      {images.length > 0 ? <Button onNextFetch={onNextFetch} /> : ''}
    </>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ImageGallery;
