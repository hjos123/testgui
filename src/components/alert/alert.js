import React, {useContext} from 'react';
import appContext from '../../context/app/appContext';

const Alert = () => {
  const appsContext = useContext(appContext);
  const { alert, mostrarAlert } = appsContext;

  const hideAlert = () => {
    mostrarAlert("","");
  }

  let classname = "alert alert-dismissible fade show alert-";

  if (alert.message.trim() === '') return null;
  classname += alert.type;
  return (
    <div className={classname} role="alert">
      <div className="container text-center">
        <strong>{alert.message}</strong>
        <button type="button"
          onClick={hideAlert}
          className="close"
          data-dismiss="alert"
          aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}
export default Alert;
