import React from 'react';
import { Login } from '../../modules/auth';

export default function Formlogin(props){
  const {password, email} = props.user;

  const validUser = () => {
    if (password !== "" && email !== "")
      return  true;
    else
      return false;
  }

  const onLogin = (e) =>{
    e.preventDefault();
    if ( validUser() ){
      props.setMessege("logearse","success");
      Login(email, password);
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
            required
            name="password" />
          </div>
          <div className="text-center">
            <input
            type="submit"
            className="btn btn-primary"
            value="Iniciar sesión" />
          </div>
        </form>
      </React.Fragment>
    );
}
