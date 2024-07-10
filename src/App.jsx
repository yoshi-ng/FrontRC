import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomeGeneral from "./pages/Home/General/General";
import Tienda from "./pages/Home/Tienda/Tienda";
import Contacto from "./pages/Home/QuienesSomos/Nosotros";
import InicioSesion from "./pages/Home/Emprendedor/Emprendedor";
import Registro from "./pages/Registro/Usuario/Usuario";
import Producto from "./pages/Productos/Productos";
import Preguntas from "./components/Home/PreguntasFrecuentes/Preguntas";

function App() {
  return (
    <>
      <HeaderG5 />
    </>
  );
}

export default App;
