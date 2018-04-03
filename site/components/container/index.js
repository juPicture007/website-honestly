/*
* This component is ported from Website Next and is meant to be
* used only by Jobs and Events components
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: [],
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}
