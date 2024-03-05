

import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/Searchbar/SearchBar';
import ImageList from './Components/Imagelist/ImageList';
import { fetchImages } from './api';

function App() {
  const [images, setImages] = useState([]);
  const [searchError, setSearchError] = useState('');

  const searchImages = async (query) => {
    if (!query.trim()) {
      setSearchError('No image Found');
      setImages([]);
      return;
    }

    const fetchedImages = await fetchImages(query);
    setImages(fetchedImages);
    setSearchError('');
  };

  return (
    <div className="App">
      <h1>Image Search App</h1>
      <SearchBar onSearch={searchImages} />
      {searchError ? (
        <p>{searchError}</p>
      ) : (
        <ImageList images={images} />
      )}
    </div>
  );
}

export default App;

