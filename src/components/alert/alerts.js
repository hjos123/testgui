import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Alerts(props) {

  const hideMessag = () =>{
    props.setMessege("","");
  }

  return(
    <React.Fragment>
      <Alert show={props.message.text ? true : false}>
        <div className="card alert-message p-2">
          <div className="card-body">
            <strong>Alerta!</strong>
            <h4>
              {props.message.text}
            </h4>
            <hr />
            <div className="d-flex justify-content-center">
              <Button onClick={() => hideMessag()} variant={props.message.type}>
                &times; Cerrar
              </Button>
            </div>
          </div>
        </div>
      </Alert>
    </React.Fragment>
  );

}
