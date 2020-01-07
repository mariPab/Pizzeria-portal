import React from 'react';
import styles from './Dashboard.module.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContentBookings = [
  {id: '1', name: 'Anna', phone: '465987584', hours: '14:00 - 17:00', table: 2},
  {id: '2', name: 'Robert', phone: '786789678', hours: '12:30 - 13:00', table: 1},
  {id: '3', name: 'John', phone: '786780453', hours: '16:30 - 19:00', table: 1},
  {id: '4', name: 'Dean', phone: '567456876', hours: '17:00 - 21:00', table: 2},
  {id: '5', name: 'Tom', phone: '567531231', hours: '22:00 - 24:00', table: 3},
  {id: '6', name: 'Robert', phone: '786789678', hours: '12:30 - 13:00', table: 2},
];

const demoContentStatistic = [
  {id: '1', value: 452},
  {id: '2', value: 345},
  {id: '3', value: 123},
  {id: '4', value: 234},
  {id: '5', value: 345},
  {id: '6', value: 456},
];

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard</h2>
    <h3>Order Statistics</h3>
    <Paper >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Order Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContentStatistic.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <h3>Table bookings for today</h3>
    <Paper >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContentBookings.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.phone}
              </TableCell>
              <TableCell>
                {row.hours}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;
