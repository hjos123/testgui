import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppState from './context/app/appState';
import RouterPrivate from './components/router/routerprivate';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import Products from './components/products/products';
import Addproduct from './components/addproduct/addproduct';
import Alerts from './components/alert/alert';

const App = () => {
  return (
    <AppState>
      <Router>
        <Navbar />
        <Alerts />
        <Switch>
          <Route exact path="/" component={Login} />
          <RouterPrivate exact path="/productos" component={Products} />
          <RouterPrivate exact path="/productos/nuevo" component={Addproduct} />
        </Switch>
      </Router>
    </AppState>
  );
}

export default App;
