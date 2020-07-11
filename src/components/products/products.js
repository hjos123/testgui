import React from 'react';
import './products.css';
import Product from './product';

export default function Products(){
  return(
    <div className="container">
      <div className="row mb-3">
        <div className="col-6">
          <span className="title-test">
            Mis Productos
          </span>
        </div>
        <div className="col-6 text-right">
          <button className="btn btn-primary">
            Agregar
          </button>
        </div>
      </div>
      <div className="row">
        <Product />
      </div>
    </div>
  );
}
