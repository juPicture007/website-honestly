import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.css';

const TimelineNav = ({ value, onClick, currentIndex }) => {
  let className = styles.old;
  if (value === currentIndex) {
    className = styles.active;
  }

  if (value > currentIndex) {
    className = styles.future;
  }

  const click = () => onClick(value);

  return (
    <button tabIndex={0} className={className} onClick={click} aria-label={`slide ${value + 1}`}>
      <span />
    </button>
  );
};

TimelineNav.propTypes = {
  value: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TimelineNav;
