import React from 'react';
import styles from './Dashboard.scss';
import CustomTable from '../../common/CustomTable/CustomTable';

const tableBookingColumns = [
  {title: 'Name', field: 'name'},
  {title: 'Phone', field: 'phone'},
  {title: 'Hours', field: 'hours'},
  {title: 'Table No.', field: 'table'},
];

const tableBookingData = [
  {name: 'Anna', phone: '465987584', hours: '14:00 - 17:00', table: 2},
  {name: 'Robert', phone: '786789678', hours: '12:30 - 13:00', table: 1},
  {name: 'John', phone: '786780453', hours: '16:30 - 19:00', table: 1},
  {name: 'Dean', phone: '567456876', hours: '17:00 - 21:00', table: 2},
  {name: 'Tom', phone: '567531231', hours: '22:00 - 24:00', table: 3},
  {name: 'Robert', phone: '786789678', hours: '12:30 - 13:00', table: 2},
];

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard</h2>
    <CustomTable
      columns={tableBookingColumns}
      data={tableBookingData}
      title={'Table booking'}
      editable={false} />
  </div>
);

export default Dashboard;
