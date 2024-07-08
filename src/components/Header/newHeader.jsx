import { useState } from "react";
import "./newHeader.css";
import usuario from "../assets/Icons/usuario.svg";
import menu from "../assets/Icons/menu_hamburguesa.svg";
import lupa from "../assets/Icons/lupa.svg";
import logo from "../assets/Logo_texto.svg";
import close from "../assets/Icons/cerrar.png";

function newHeader({ emprendedor, inicio, tienda, contacto }) {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <nav className="nav">
        <div className="nav_logo">
          <img src={logo} alt="logo residuo creativo" />
        </div>

        <div className={`nav_menu ${showMenu ? "show_menu" : ""}`}>
          <ul className="nav_menu_list">
            <li className="nav_menu_item">
              <a href="#" className="nav_menu_link">
                {inicio}
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="#" className="nav_menu_link">
                {tienda}
              </a>
            </li>
            <li className="nav_menu_item">
              <a href="#" className="nav_menu_link">
                {contacto}
              </a>
            </li>
          </ul>
          <div className="nav_toggle" onClick={handleShowMenu}>
            <img src={menu} alt="icono para desplegar menu" />
          </div>
          <div className="nav_close" onClick={handleShowMenu}>
            <img src={close} alt="boton para cerrar el menu" />
          </div>
        </div>

        <div className="nav_busqueda">
          <p>Hola, ¿Qué comprarás hoy?</p>
          <img src={lupa} alt="icono de busqueda" />
        </div>
        <div className="nav_usuario">
          <div className="nav_usuario_icon">
            <img src={usuario} alt="icono usuario" />
          </div>
          <div className="nav_usuario_saludo">
            <h2>Hola! {emprendedor}</h2>
          </div>
          <div className="nav_usuario_ingreso">
            <a href="#">Inicia sesion</a>
            <div className="nav_usuario_registro">
              <a href="#">Registrate</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default newHeader;
