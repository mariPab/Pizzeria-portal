import React from 'react';
import {Link, Switch} from 'react-router-dom';
import styles from './Waiter.scss';
import { Route } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NewOrder from '../NewOrder/NewOrder';
import Order from '../Order/Order';
import Button from '@material-ui/core/Button';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter View</h2>
    <Button component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/1`}>Order details</Button>
    <Fab color='secondary' aria-label='add' component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
      <AddIcon />
    </Fab>

    <hr />
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder}/>
      <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order}/>
    </Switch>

  </div>
);

export default Waiter;
