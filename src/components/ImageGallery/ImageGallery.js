import { Component } from 'react';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=1&key=28008769-991cef6bea94341115fdc5eba&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(result => this.setState({ images: result.hits }));
    }
  }

  render() {
    console.log(this.state.images);
    return (
      <ul className={s.imageGallery}>
        {this.state.images?.map(({ id, webformatURL, largeImageURL }) => (
          <imageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
