import React from 'react';
import './navbar.css';

export default function Navbar(){
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
}
