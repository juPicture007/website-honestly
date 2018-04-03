import React from 'react';
import PropTypes from 'prop-types';

import Note from '../../../components/note';
import RawHtml from '../../../components/raw-html';
import styles from './style.css';
import Link from '../../../components/link';
import Wall from '../../../components/wall';

export default function Jobs({ jobs }) {
  const listings = jobs.map((job, index) => (
    <Note key={index}>
      <Link className={styles.title} to="job" navigationData={{ slug: job.slug }}>
        {job.title}
      </Link>
      <RawHtml>{job.description}</RawHtml>
    </Note>
  ));

  const jobsClasses = `jobs ${styles.jobs}`;

  return (
    <div className={jobsClasses}>
      <Wall cols={3}>{listings}</Wall>
    </div>
  );
}

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};
