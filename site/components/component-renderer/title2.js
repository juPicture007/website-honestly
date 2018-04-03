import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function Title2({ children }) {
  return <h2 className={styles.h2}>{children}</h2>;
}

Title2.propTypes = {
  children: PropTypes.node,
};
