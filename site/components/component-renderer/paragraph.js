import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as textStyles from '../utils/text.css';
import styles from './styles.css';

export default function Paragraph({ align, children }) {
  const pClass = classNames(textStyles[align], styles.p);
  return <p className={pClass}>{children}</p>;
}

Paragraph.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  children: PropTypes.node,
};
