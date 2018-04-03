import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class HR extends Component {
  static propTypes = {
    color: PropTypes.oneOf(['red', 'grey']),
    customClassName: PropTypes.string,
  };

  defaultProps = {
    customClassName: 'horizontal-line',
  };

  render() {
    const hrClass = classNames({
      [styles.hr]: true,
      [styles.red]: this.props.color === 'red',
      [styles.grey]: this.props.color === 'grey',
      [this.props.customClassName]: true,
    });

    return <hr className={hrClass} />;
  }
}
