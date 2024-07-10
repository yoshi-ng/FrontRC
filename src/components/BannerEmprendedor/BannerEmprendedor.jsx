import "./BannerEmprendedor.css";
import fondo1 from "../assets/PerfilEmprendedores/fondo1.png";

function BannerEmprendedor() {
  return (
    <div className="contenedor_banner">
      <img src={fondo1} alt="Background banner" />
      <div className="contenido">
        <p>"¡Hola, Emprendedor!"</p>
        <p>"Cientos de compradores estan ansiosos por conocer tus productos"</p>
        <p>"¡Empieza ya!"</p>
      </div>
    </div>
  );
}

export default BannerEmprendedor;
