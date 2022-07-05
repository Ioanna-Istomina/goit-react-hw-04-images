import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };
  handleNameChange = ev => {
    this.setState({ query: ev.currentTarget.value.toLowerCase() });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    if (this.state.query.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.handleSubmit} className={s.searchForm}>
          <button type="submit" className={s.searchFormButton}>
            <FaSearch />
          </button>
          <input
            type="text"
            autoComplete="off"
            value={this.state.query}
            autoFocus
            placeholder="Search images and photos"
            className={s.searchFormInput}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
