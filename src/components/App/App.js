import ImageGallery from 'components/ImageGallery';
import { Component } from 'react';
import Searchbar from '../Searchbar';

class App extends Component {
  state = {
    query: '',
    images: null,
  };

  handleSearchSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}

export default App;
