import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Principle = ({ number, title, description }) => (
  <li className={styles.container}>
    <div className={styles.leftCol}>
      <div className={styles.number}>{number}</div>
    </div>
    <div className={styles.rightCol}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
    </div>
  </li>
);

Principle.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Principle;
