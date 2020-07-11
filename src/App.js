import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import Products from './components/products/products';
import Addproduct from './components/addproduct/addproduct';

import AppState from './context/app/appState';

export default function App() {
    return (
      <AppState>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/productos" component={Products} />
            <Route exact path="/productos/nuevo" component={Addproduct} />
          </Switch>
        </Router>
      </AppState>
    );
}
