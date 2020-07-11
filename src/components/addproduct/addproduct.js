import React from 'react';
import './addproduct.css';
import Formproduct from './formproduct';
import Formphoto from './formphoto';

export default function Addproduct(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <a href="/#" className="nav-link mb-3 text-uppercase return-test">Regresar a mis productos</a>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Registra un producto para vender</h2>
              <p>Escribe la informacion de tu producto, una fotografia y la fecha y hora en que</p>
              <p>dejas de recibir pedidos para el producto.</p>
            </div>
          </div>
        </div>
      </div>
      <Formproduct />
      <Formphoto />
    </div>
  );
}
