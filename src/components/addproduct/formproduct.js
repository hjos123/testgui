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
                    <input
                      type="text"
                      placeholder='ej. Monitor LG de 23"'
                      className="form-control formcontrol"
                      name="name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Categoría de tu platillo</label>
                    <input
                      placeholder='ej. Electronicos'
                      type="text"
                      className="form-control formcontrol"
                      name="category" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Descripcion del producto</label>
                    <input
                      placeholder='ej. Monitor Full HD LG, 23 pulgadas, Resolucion 1920x1080px'
                      type="text"
                      className="form-control formcontrol"
                      name="description" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>¿Cuántos productos quieres vender?</label>
                    <input
                      pattern='[0-9]*'
                      placeholder='ej. 1'
                      type="text"
                      className="form-control formcontrol"
                      name="quantity" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>¿Hasta cuando estara disponible?</label>
                    <input
                      placeholder='Seleccione una fecha y hora'
                      type="text"
                      className="form-control formcontrol"
                      name="date" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>¿Que precio tiene tu producto?</label>
                    <input
                      pattern='[0-9]*'
                      placeholder='ej. 3000 (Usa solo numeros)'
                      type="text"
                      className="form-control formcontrol"
                      name="price" />
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
