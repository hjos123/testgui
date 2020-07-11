import React from 'react';
import axios from 'axios';
import { url } from '../../modules/auth';

export default function Formregister(props){
  const {password, email, name} = props.user;

  const onRegister = (e) =>{
    e.preventDefault();
    axios.post(`${url}/register`, {email: email, password:password, name: name})
    .then(res => {
        if (res.status === 200){
            props.changerForm();
            props.setMessege({
              text: "Usuario registrado.",
              type: "alert-success"
            });
        }
        else{
          props.setMessege({
            text: "Favor de validar los campos/correo duplicado.",
            type: "alert-warning"
          });
        }
    })
    .catch(error => {
      //console.log(error.response)
      props.setMessege({
        text: "Error con el servidor.",
        type: "alert-warning"
      });
    });
  }

  if ( props.showLogin )
    return null;
  else
    return(
      <React.Fragment>
        <h2 className="title-test mb-4">Registrate</h2>
        <form action="#" onSubmit={onRegister} method="post">
          <div className="form-group">
            <label>Nombre</label>
            <input
            type="text"
            value={name}
            onChange={props.Changer}
            className="form-control"
            placeholder="Escribe tu nombre"
            required
            name="name" />
          </div>
          <div className="form-group">
            <label>Correo electronico</label>
            <input
            type="email"
            value={email}
            onChange={props.Changer}
            className="form-control"
            placeholder="ej. casa@lacasademaria.mx"
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
            className="btn btn-primary"
            value="Registrarse" />
          </div>
        </form>
      </React.Fragment>
    );
}
