/* Logo, menu desplegable, barra de busqueda, icono de usuario, bienvenida y opciones de inicio de sesion y registrarse (hasta la barra naranja inferior) */

import { useState } from "react";
import "./Header.css";
import usuario from "../assets/Icons/usuario.svg";
import menu from "../assets/Icons/menu_hamburguesa.svg";
import lupa from "../assets/Icons/lupa.svg";
import logo from "../assets/Logo.svg";
import close from "../assets/Icons/cerrar.png";

function Header({ emprendedor, inicio, tienda, contacto }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <div className="nav__logo">
            <img src={logo} alt="logo Residuo Creativo" />
          </div>
          <div className="nav__marca">
            <p>Residuo Creativo</p>
          </div>
        </div>

        {/* Operador Ternario */}
        <div className={`nav__menu ${showMenu ? "show_menu" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                {inicio}
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                {tienda}
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                {contacto}
              </a>
            </li>
          </ul>
          <div className="nav__close" onClick={handleShowMenu}>
            <img src={close} alt="boton cerrar menu" />
          </div>
        </div>
        <div className="nav__toggle" onClick={handleShowMenu}>
          <img src={menu} alt="menu desplegable" />
        </div>

        <div className="barra-busqueda">
          <p className="barra_texto">Hola, ¿Qué comprarás hoy?</p>
          <a href="#">Buscar</a>
          <img className="lupa" src={lupa} alt="lupa" />
        </div>
        <div className="usuario">
          <div className="icon_usuario">
            <img src={usuario} alt="icono-usuario" />
          </div>
          <div className="saludo">
            <p>!Hola {emprendedor} </p>
            <p> Inicia sesion </p>
            <p> o registrate </p>
            <a href="#">Cuenta</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
