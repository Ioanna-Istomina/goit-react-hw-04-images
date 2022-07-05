import { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

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
    const { handleSubmit, handleNameChange } = this;
    return (
      <header className={s.searchbar}>
        <form onSubmit={handleSubmit} className={s.searchForm}>
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
            onChange={handleNameChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
