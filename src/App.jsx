import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomeGeneral from "./pages/Home/General/General";
import Tienda from "./pages/Home/Tienda/Tienda";
import Contacto from "./pages/Home/QuienesSomos/Nosotros";
import InicioSesion from "./pages/Home/Emprendedor/Emprendedor";
import Registro from "./pages/Registro/Usuario/Usuario";

function App() {
  return (
    <>
      <Header
        emprendedor="Emprendedor!"
        inicio="Inicio"
        tienda="Tiendas"
        contacto="Contacto"
      />
      <Routes>
        <Route path="/" element={<HomeGeneral />}></Route>
        <Route path="/tiendas" element={<Tienda />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/inicio-de-sesion" element={<InicioSesion />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
      </Routes>
      <main></main>
      <Footer />
    </>
  );
}

export default App;
