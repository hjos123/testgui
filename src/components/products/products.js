import React from 'react';
import {Link} from 'react-router-dom';
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
          <Link to='/productos/nuevo' className="btn btn-danger btn-primary-test">
            Agregar
          </Link>
        </div>
      </div>
      <div className="row">
        <Product />
      </div>
    </div>
  );
}
