import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default function Note({ children }) {
  return <div className={styles.note}>{children}</div>;
}

Note.propTypes = {
  children: PropTypes.node.isRequired,
};
