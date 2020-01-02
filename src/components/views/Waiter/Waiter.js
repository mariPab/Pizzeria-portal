import React from 'react';
import {Link, Switch} from 'react-router-dom';
import styles from './Waiter.scss';
import { Route } from 'react-router-dom';

import NewOrder from '../NewOrder/NewOrder';
import Order from '../Order/Order';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>Add new order</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/1`}>Order details</Link>

    <hr />
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder}/>
      <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order}/>
    </Switch>

  </div>
);

export default Waiter;
