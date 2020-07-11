import React from 'react';

import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Products from './components/products/products';
import Addproduct from './components/addproduct/addproduct';

export default function App() {
    return (
      <div>
        <Navbar />
        <Addproduct />
      </div>
    );
}
