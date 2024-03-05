import React, { useState } from 'react';
import './Searchbar.css';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className='inp'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images..."
      />
     
      <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
