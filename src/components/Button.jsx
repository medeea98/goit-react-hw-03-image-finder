// Button.js

/* import React, { Component } from 'react';
import css from '../styles.module.css';

class Button extends Component {
  render() {
    return (
      <button className={css.Button} onClick={this.props.onClick}>
        Load more
      </button>
    );
  }
}

export default Button; */
import React from 'react';
import css from '../styles.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;