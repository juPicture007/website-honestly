/**
 * Grid Component
 *
 * The grid component is used to create a grid layout. It should
 * contain one or more Cell Components. The grid defaults to have
 * gutters between Cells.
 *
 * Grid
 * @props: {
 *   fit: {Boolean}, make all cells fit into a single row
 *   breakOn: {String}, responsive grid, will break when a given
 *            breakpoint is met. Check for breakpoint names in
 *            variables/breakpoints.css. Default value is `mobile`.
 * }
 *
 * Cell
 * @props: {
 *   size: {Number}, number of columns to span out of 12
 * }
 *
 */

/* eslint react/no-multi-comp: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

export class Grid extends Component {
  static propTypes = {
    breakOn: PropTypes.string,
    children: PropTypes.node,
    extraClassName: PropTypes.string,
    fit: PropTypes.bool,
  };

  defaultProps = {
    extraClassName: 'grid',
    breakOn: 'mobile',
  };

  render() {
    const gridClassNames = classNames({
      [styles.grid]: true,
      [styles.withGutter]: true,
      [styles.fit]: this.props.fit,
      [`responsive-grid-${this.props.breakOn}`]: true,
    });

    return <div className={gridClassNames}>{this.props.children}</div>;
  }
}

export Cell from './cell.js';
