import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

const Content = ({ year, title, text, fact, image, flip }) => {
  const topRowClassName = flip ? styles.topRowFlipped : styles.topRow;

  return (
    <div>
      <div className={styles.largeScreen}>
        <div className={topRowClassName}>
          <div className={styles.imageWrapper}>
            <img src={image} alt={`year ${year}`} className={styles.image} />
          </div>
          <div className={styles.copy}>
            <div className={styles.year}>{year}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.body}>{text}</div>
            <div className={styles.fact}>
              <span className={styles.factTitle}>Random fact of the year: </span>
              {fact}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.smallScreen}>
        <div className={styles.copy}>
          <div className={styles.year}>{year}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.body}>{text}</div>
          <div className={styles.fact}>
            <span className={styles.factTitle}>Random fact of the year: </span>
            {fact}
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fact: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  mobileImage: PropTypes.string.isRequired,
  flip: PropTypes.bool,
};

export default Content;
