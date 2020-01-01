import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard}/>
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
          <Route path={`${process.env.PUBLIC_URL}/tables`} component={Tables}/>
          <Route path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter}/>
          <Route path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen}/>

          <div className="App">
            <header className="App-header">
              <p>
          Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
          Learn React
              </a>
            </header>
          </div>
        </Switch>
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
