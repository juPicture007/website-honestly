import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './style.css';

const cx = classnames.bind(styles);

const Card = ({ className, children }) => {
  return <div className={cx(styles.Card, className)}>{children}</div>;
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
