// ImageGalleryItem.js
import React, { Component } from 'react';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.openModal(this.props.image);
  };

  render() {
    const { image } = this.props;
    return (
      <li className="gallery-item" onClick={this.handleClick}>
        <img src={image.webformatURL} alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
