import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}

Section.propTypes = {
  children: PropTypes.node,
};
