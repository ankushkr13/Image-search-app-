import React from 'react';
import ImageCard from '../imagecard/ImageCard';
import './ImageList.css';
const ImageList = ({ images }) => {
  return (
   <div className="image-list">

      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
