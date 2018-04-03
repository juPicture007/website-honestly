import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './style.css';

const cx = classnames.bind(styles);

const Arrow = ({ direction, onClick, currentIndex }) => {
  const click = () => {
    let newIndex = currentIndex;
    if (direction === 'left' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'right' && currentIndex < 6) {
      newIndex = currentIndex + 1;
    }
    onClick(newIndex);
  };

  const isClickable =
    (direction === 'left' && currentIndex > 0) || (direction === 'right' && currentIndex < 6);

  return (
    <button
      className={cx('arrow', direction === 'left' ? 'arrowLeft' : 'arrowRight')}
      onClick={click}
      aria-label={direction}
    >
      <div className={isClickable ? styles.active : styles.inactive} />
      <div className={styles.innerArrow} />
    </button>
  );
};

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default Arrow;
