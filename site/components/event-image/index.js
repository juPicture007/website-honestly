// Displays event related image with link

import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default function EventImage({ imgPath, imgAlt }) {
  return (
    <div className={styles.imgBorder}>
      <div className={styles.imgWrapper}>
        <img className={styles.eventPicture} src={imgPath} alt={imgAlt} />
      </div>
    </div>
  );
}

EventImage.propTypes = {
  imgPath: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};
