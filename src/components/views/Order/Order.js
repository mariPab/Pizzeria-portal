import React from 'react';
import styles from './Order.scss';
import PropTypes from 'prop-types';

const Order = props => (
  <div className={styles.component}>
    <h2>Order View</h2>
    <span>{props.match.params.id}</span>
  </div>
);

Order.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Order;
