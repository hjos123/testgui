import React from 'react';

export default function Formproduct(){
  return(
    <div className="row mb-4">
      <div className="col-md-12">
        <div className="card pt-2 pb-2 pr-4 pl-4">
          <div className="card-body">
            <h2 className="text-center title-test-2">
              Información general de tu producto
            </h2>
            <form action="#" className="form-test" method="post">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>El nombre de tu producto</label>
                    <input type="text" className="form-control" name="name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Categoría de tu platillo</label>
                    <input type="text" className="form-control" name="category" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Descripcion del producto</label>
                    <input type="text" className="form-control" name="description" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>¿Cuántos productos quieres vender?</label>
                    <input type="text" className="form-control" name="quantity" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>¿Hasta cuando estara disponible?</label>
                    <input type="text" className="form-control" name="date" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>¿Que precio tiene tu producto?</label>
                    <input type="text" className="form-control" name="price" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
