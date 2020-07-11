import React from 'react';
import {Link} from 'react-router-dom';
import './addproduct.css';
import Formproduct from './formproduct';
import Formphoto from './formphoto';

export default function Addproduct(){
  return(
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-12">
          <Link to="/productos" className="nav-link mb-3 text-uppercase return-test">
            Regresar a mis productos
          </Link>
        </div>
        <div className="col-md-12">
          <div className="card pt-2 pb-2 pr-4 pl-4">
            <div className="card-body">
              <h2 className="text-center title-test-2">Registra un producto para vender</h2>
              <p className="text-test">Escribe la informacion de tu producto, una fotografia y la fecha y hora en que</p>
              <p className="text-test">dejas de recibir pedidos para el producto.</p>
            </div>
          </div>
        </div>
      </div>
      <Formproduct />
      <Formphoto />
    </div>
  );
}
