import React from 'react';

export default function Product(props){
  return(
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <div className="product">
            <img src="https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg" alt="img" />
            <span>Titutlo</span>
            <p>Descripcion</p>
            <div className="text-right">
              <h3>$ 1500.21</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
