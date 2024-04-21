// Modal.js
/* import React, { Component } from 'react';
import css from '../styles.module.css';

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
      <div className={css.Overlay} onClick={this.props.closeModal}>
        <div className={css.Modal}>
          <img src={this.props.modalImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal; */
import React, { useEffect } from 'react';
import css from '../styles.module.css';

const Modal = ({ closeModal, modalImage }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]); 

  return (
    <div className={css.Overlay} onClick={closeModal}>
      <div className={css.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

export default Modal;
