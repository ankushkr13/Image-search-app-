import React from 'react';
import './ImageCard.css';
const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;