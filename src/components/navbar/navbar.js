import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import appContext from '../../context/app/appContext';

import './navbar.css';

export default function Navbar(){
  const appsContext = useContext(appContext);
  const { autenticado, cerrarSesion } = appsContext;

  if (autenticado)
    return (
      <nav className="navbar navbar-light bg-test-primary mb-5">
        <div className="container">
          <div className="ml-auto">
            <Link to="/productos" className="nav-link d-inline-block text-white">
              Mis productos
            </Link>
            <Link to="/" onClick={cerrarSesion} className="nav-link d-inline-block text-white">
              Cerrar sesión
            </Link>
          </div>
        </div>
      </nav>
    );
  else
    return null;
}
