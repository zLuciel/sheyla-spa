import React from "react";
import {Outlet} from "react-router-dom";
import "./Header.css"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookSquare,FaTiktok} from "react-icons/fa"
import logo from "../../assets/img/Sheyla-logo.png"
export const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
            <div className="nav-logo">
           <img src={logo} alt="logo" />
            </div>
            <ul>
                <li><a href="#0">Inicio</a></li>
                <li><a href="#1">Paquetes</a></li>
                <li><a href="#2">Vitaminas</a></li>
                <li><a href="#3">Videos</a></li>
                <li><a href="#4">Fotos</a></li>
            </ul>
            <div className="nav-redes-sociales">
                <BsInstagram/>
                <FaFacebookSquare/>
                <FaTiktok/>
            </div>
        </nav>
      </header>
      <section>
        <Outlet/>
      </section>
    </>
  );
};
