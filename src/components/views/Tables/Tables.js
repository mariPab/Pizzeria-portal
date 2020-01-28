import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import styles from './Tables.scss';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NewBooking from '../NewBooking/NewBooking';
import Booking from '../Booking/Booking';
import NewEvent from '../NewEvent/NewEvent';
import Event from '../Event/Event';

import Paper from '@material-ui/core/Paper';
import { ViewState }  from '@devexpress/dx-react-scheduler';
import { Scheduler, DayView, Appointments, AppointmentTooltip, DateNavigator, TodayButton, Toolbar } from '@devexpress/dx-react-scheduler-material-ui';

const data = [
  { startDate: '2020-01-28 15:00', endDate: '2020-01-28 16:00', title: 'John Smith, table 1' },
  { startDate: '2020-01-28 18:00', endDate: '2020-01-28 19:30', title: 'Andrea Sun, table 2' },
  { startDate: '2020-01-28 14:00', endDate: '2020-01-28 16:00', title: 'Lesley Nilson, table 3' },
  { startDate: '2020-01-28 15:00', endDate: '2020-01-28 17:30', title: 'Miranda Ball, table 2' },
  { startDate: '2020-01-28 19:00', endDate: '2020-01-28 20:30', title: 'Carl Fischer, table 1' },
];

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables View</h2>
    <h3>Bookings & events</h3>

    <Paper>
      <Scheduler
        data={data}
      >
        <ViewState
          defaultCurrentDate={new Date()}/>
        <DayView
          startDayHour={12}
          endDayHour={24}
        />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <AppointmentTooltip />
      </Scheduler>
    </Paper>

    <Link to={`${process.env.PUBLIC_URL}/tables/booking/146dg`}>Booking details</Link>
    <Fab color='secondary' aria-label='add' component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
      <AddIcon />
    </Fab>

    <h3>Events</h3>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/13fh`}>Event details</Link>
    <Fab color='secondary' aria-label='add' component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>
      <AddIcon />
    </Fab>

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
