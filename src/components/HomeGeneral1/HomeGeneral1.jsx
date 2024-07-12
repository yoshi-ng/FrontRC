import "./HomeGeneral1.css";
import fondo1 from "../assets/Home/Banner1.png";

function HomeGeneral1() {
  return (
    <div className="homeGeneral_banner1">
      <p className="homeGeneral_banner1_titulo">
        Bienvenidos al espacio para que emprendedores ofrezcan sus productos de
        material reciclado!
      </p>
      <img
        src={fondo1}
        alt="fondo descripcion"
        className="homeGeneral_banner1_imagen"
      />
    </div>
  );
}

export default HomeGeneral1;
