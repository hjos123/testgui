import React from 'react';
import axios from 'axios';
import { setToken, url } from '../../modules/auth';

export default function Formlogin(props){
  const {password, email} = props.user;

  const validUser = () => {
    if (password.trim() !== "" && email.trim() !== "")
      return  true;
    else
      return false;
  }

  const onLogin = (e) =>{
    e.preventDefault();
    if ( validUser() ){
      axios.post(`${url}/login`, {email: email, password:password})
      .then(res => {
          //console.log(res);
          setToken(res.data.token);
      })
      .catch(error => {
        //console.log(error.response)
        props.setMessege({
          text: "Error de credenciales",
          type: "alert-warning"
        });
      });
    }
  }

  if ( !props.showLogin )
    return null;
  else
    return(
      <React.Fragment>
        <h2 className="title-test mb-4">Inicia sesión</h2>
        <form action="#" onSubmit={onLogin} method="post">
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
