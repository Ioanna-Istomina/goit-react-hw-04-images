import { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button';
import fetchImages from '../../service/images-api';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    showModal: false,
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

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <ul className={s.imageGallery}>
          {this.state.images?.map(({ id, webformatURL }) => (
            <ImageGalleryItem key={id} webformatURL={webformatURL} />
          ))}
        </ul>
        {this.state.images.length < 0 ? (
          <Button onNextFetch={this.onNextFetch} />
        ) : (
          <h2 className={s.title}> No images found for your request ...</h2>
        )}
      </>
    );
  }
}
export default ImageGallery;
