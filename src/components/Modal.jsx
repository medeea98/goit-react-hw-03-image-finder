// Modal.js
import React, { Component } from 'react';

class Modal extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className="overlay" onClick={this.props.closeModal}>
        <div className="modal">
          <img src={this.props.modalImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
