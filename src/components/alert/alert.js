import React, {useContext} from 'react';
import appContext from '../../context/app/appContext';
import { Alert, Container, Button } from 'react-bootstrap';

const Alerts = () => {
  const appsContext = useContext(appContext);
  const { alert, mostrarAlert } = appsContext;

  const hideAlert = () => {
    mostrarAlert(null,null);
  }

  if (alert.message === null) return null;
  return (
      <Alert
        variant={alert.type} >
        <Container>
          <Alert.Heading>
            {
              alert.message !== undefined
              ?
              alert.message.map(mensaje =>
                <li key={mensaje}>{mensaje}</li>
              )
              : 'Error del servidor'
            }
          </Alert.Heading>
          <hr />
          <div className="d-flex justify-content-center">
            <Button onClick={hideAlert} variant={alert.type}>
              &times;Cerrar
            </Button>
          </div>
        </Container>
      </Alert>
  );
}
export default Alerts;
