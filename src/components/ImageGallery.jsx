// ImageGallery.js
import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { images, openModal } = this.props;
    return (
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
