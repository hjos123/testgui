import React, {useContext} from 'react';
import appContext from '../../context/app/appContext';

const Formregister = props => {
  const {password, email, name} = props.user;

  const { registrarUsuario, token } = useContext(appContext);

  const onRegister = (e) =>{
    e.preventDefault();
    registrarUsuario(props.user);
  }

  if (token !== null && token !== undefined)
    props.history.push('/productos');

  if ( props.showLogin )
    return null;
  else
    return(
      <React.Fragment>
        <h2 className="title-test4 mb-4">Registrate</h2>
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
            className="btn btn-danger btn-primary-test"
            value="Registrarse" />
          </div>
        </form>
      </React.Fragment>
    );
}

export default Formregister;
