import React from 'react';
import styles from './Booking.scss';
import PropTypes from 'prop-types';

const Booking = ({ match }) => (
  <div className={styles.component}>
    <h2>Booking View</h2>
    <span>{match.params.id}</span>
  </div>
);

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Booking;
