import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import styles from './Tables.scss';

import NewBooking from '../NewBooking/NewBooking';
import Booking from '../Booking/Booking';
import NewEvent from '../NewEvent/NewEvent';
import Event from '../Event/Event';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/146dg`}>Booking details</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Add new booking</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/13fh`}>Event details</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>Add new event</Link>

    <hr />
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBooking}/>
      <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking}/>
      <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={NewEvent}/>
      <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Event}/>
    </Switch>
  </div>
);

export default Tables;
