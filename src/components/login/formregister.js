import React from 'react';

export default function Formregister(props){
  const {password, email, name, repeatpassword} = props.user;

  const onRegister = (e) =>{
    e.preventDefault();
    props.setMessege("registro","danger");
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
          <div className="form-group">
            <label>Repetir contraseña</label>
            <input
            type="password"
            value={repeatpassword}
            onChange={props.Changer}
            className="form-control"
            required
            name="repeatpassword" />
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
