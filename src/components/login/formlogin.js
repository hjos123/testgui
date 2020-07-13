import React from 'react';
import AuthService from '../../modules/auth';

const Formlogin = props => {

  const {password, email} = props.user;

  const validUser = () => {
    if (password.trim() !== "" && email.trim() !== "")
      return  true;
    else
      return false;
  }

  const Loggin = (e) => {
    e.preventDefault();
    if (validUser){
      AuthService.onLogin(email, password)
      .then(resp => {
        console.log(resp);
        if (resp.status === 200){
          props.mostrarAlert("", "");
          AuthService.setToken(resp.data.token);
        }
        else
          props.mostrarAlert("Error de credenciales", "warning");
      })
      .catch(error => {
        //console.log(error);
        props.mostrarAlert("Error al conectarse al servidor", "danger");
      });
    }
  }

  if ( !props.showLogin )
    return null;
  else
    return(
      <React.Fragment>
        <h2 className="title-test4 mb-4">Inicia sesión</h2>
        <form action="#" onSubmit={Loggin} method="post">
          <div className="form-group">
            <label>Correo electronico</label>
            <input
            type="email"
            value={email}
            onChange={props.Changer}
            className="form-control"
            placeholder="ej. maria@lacasademaria.mx"
            required
            name="email" />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
            type="password"
            value={password}
            onChange={props.Changer}
            className="form-control"
            placeholder="Escribe tu contraseña"
            required
            name="password" />
          </div>
          <div className="text-center">
            <input
            type="submit"
            className="btn btn-danger btn-primary-test"
            value="Iniciar sesión" />
          </div>
        </form>
      </React.Fragment>
    );
}

export default Formlogin;
