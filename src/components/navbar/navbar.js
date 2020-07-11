import React, { useContext } from 'react';
import appContext from '../../context/app/appContext';

import './navbar.css';

export default function Navbar(){
  const appsContext = useContext(appContext);
  const { onloggin } = appsContext;

  if (onloggin)
    return (
      <nav className="navbar navbar-light bg-test-primary mb-5">
        <div className="container">
          <div className="ml-auto">
            <a href="/#" className="nav-link d-inline-block text-white">Mis productos</a>
            <a href="/#" className="nav-link d-inline-block text-white">Cerrar sesión</a>
          </div>
        </div>
      </nav>
    );
  else
    return null;
}
