// import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import { Component } from 'react';
import Searchbar from '../Searchbar';
import s from './App.module.css';

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
      <div className={s.app}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
