import ImageGallery from 'components/ImageGallery';
import { useState } from 'react';
import Searchbar from '../Searchbar';
import s from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearchSubmit = query => setQuery(query);

  return (
    <div className={s.app}>
      <Searchbar onSubmit={handleSearchSubmit} changePage={setPage} />
      <ImageGallery query={query} changePage={setPage} page={page} />
      {''}
    </div>
  );
};
export default App;
