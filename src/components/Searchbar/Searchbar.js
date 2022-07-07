import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit, changePage }) => {
  const [query, setQuery] = useState('');

  const handleNameChange = ev => {
    setQuery(ev.currentTarget.value.toLowerCase());
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query);
    setQuery('');
    changePage(1);
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <button type="submit" className={s.searchFormButton}>
          <FaSearch />
        </button>
        <input
          type="text"
          autoComplete="off"
          value={query}
          autoFocus
          placeholder="Search images and photos"
          className={s.searchFormInput}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
