import React from 'react';
import styles from './Event.scss';
import PropTypes from 'prop-types';

const Event = ({ match }) => (
  <div className={styles.component}>
    <h2>Event View</h2>
    <span>{match.params.id}</span>
  </div>
);

Event.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Event;
