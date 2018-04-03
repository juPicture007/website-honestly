import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/typography/_fonts.css';

export default function Paragraph({ children }) {
  return <strong className={styles.boldSansSerif}>{children}</strong>;
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};
