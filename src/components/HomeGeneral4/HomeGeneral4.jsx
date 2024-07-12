import "./HomeGeneral4.css";
import fondo1 from "../assets/Home/Banner4.png";

function HomeGeneral4() {
  return (
    <div className="homeGeneral_banner4">
      <img
        src={fondo1}
        alt="fondo 1 imagen de emprendedores"
        className="homeGeneral_banner4_imagen"
      />
      <p className="homeGeneral_banner4_contenido">
        Residuo Creativo es un sitio exclusivamente diseñado para que personas
        de todo Chile publiquen sus artículos sostenibles hechos a partir de
        materiales reciclados.
      </p>
    </div>
  );
}

export default HomeGeneral4;
