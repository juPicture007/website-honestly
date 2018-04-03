import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function Link({ children, href }) {
  return (
    <a className={styles.a} href={href}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};
