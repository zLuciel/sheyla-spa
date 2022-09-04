import React from "react";
import {Outlet} from "react-router-dom";
import "./Header.css"
export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
            <div className="nav-logo">
                logo
            </div>
            <ul>
                <li><a href="#0">Inicio</a></li>
                <li><a href="#1">Paquetes</a></li>
                <li><a href="#2">Vitaminas</a></li>
                <li><a href="#3">Videos</a></li>
                <li><a href="#4">Fotos</a></li>
            </ul>
            <div className="nav-redes-sociales">
                redes socales
            </div>
        </nav>
      </header>
      <section>
        <Outlet/>
      </section>
    </>
  );
};
