import React from 'react';

export default function Formphoto(){
  return(
    <div className="row">
      <div className="col-md-12">
        <div className="card pt-2 pb-2 pr-4 pl-4">
          <div className="card-body">
            <h2 className="text-center title-test-2">Fotografía de tu producto</h2>
            <p className="text-test">Presiona aqui para subir uno o mas fotografias, o arrastra las imagenes de tu producto,</p>
            <p className="text-test">puedes reordenar las imagenes. La fotografia principal de tu producto sera la que este</p>
            <p className="text-test">al lado izquierdo de este recuadro.</p>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-4 mb-4 text-right">
        <button className="btn btn-primary">
          Registrar
        </button>
      </div>
    </div>
  );
}
