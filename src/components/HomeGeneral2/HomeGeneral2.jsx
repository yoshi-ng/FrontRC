import "./HomeGeneral2.css";
import hojas from "../assets/Home/hojitas.png";

function HomeGeneral() {
  return (
    <div className="homeGeneral_banner2">
      <div className="homeGeneral_banner2_texto">
        <h2 className="homeGeneral_banner2_titulo">
          No te pierdas los productos en base al reciclaje!
        </h2>
        <p className="homeGeneral_banner2_contenido">
          Donde reciclaje y creatividad se unen en un emprendimiento
          comprometido con el medioambiente. Ofrecemos una amplia gama de
          productos ecológicos, muchos de los cuales son reciclados y
          reinventados por nuestros talentosos emprendedores.
        </p>
      </div>
      <img
        src={hojas}
        alt="logo de hojas verdes"
        className="homeGeneral_banner_imagen"
      />
    </div>
  );
}

export default HomeGeneral;
