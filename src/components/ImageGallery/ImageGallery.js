import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button';
import fetchImages from '../../service/images-api';
import Modal from 'components/Modal';

class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    loading: false,
    page: 1,
    showModal: false,
    url: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;
    if (prevState.page < page) {
      fetchImages(query, page)
        .then(res => res.json())
        .then(result =>
          this.setState(prevState => ({
            images: [...prevState.images, ...result.hits],
          }))
        )
        .finally(() => this.setState({ loading: false }));
    }

    if (prevProps.query !== query) {
      this.setState({ loading: true, images: [] });

      fetchImages(query, page)
        .then(res => res.json())
        .then(result => this.setState({ images: result.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onNextFetch = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  showModal = imagesUrl => {
    this.setState({ showModal: !this.state.showModal, url: imagesUrl });
  };

  render() {
    const { showModal, images, loading, url } = this.state;
    const { toogleModal, onNextFetch } = this;
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
              onClick={this.showModal}
            />
          ))}
        </ul>
        {images.length > 0 ? <Button onNextFetch={onNextFetch} /> : ''}
      </>
    );
  }
}
export default ImageGallery;
