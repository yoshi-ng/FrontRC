import "./Emprendedor.css";

import Boton from "../../../components/Botones/Boton";
import BannerEmprendedor from "../../../components/BannerEmprendedor/BannerEmprendedor";
import BannerInfo from "../../../components/BannerInfo/BannerInfo";
import BannerRProducto from "../../../components/BannerRProducto/BannerRProducto";

function Emprendedor() {
  return (
    <>
      <div className="pagina_inicio_emprendedor">
        {/* Banner principal */}
        <div className="emprendedor_tienda">
          <BannerEmprendedor />
          <div className="btn_tienda">
            <Boton text="Abrir mi tienda" />
          </div>
        </div>

        {/* Instrucciones */}
        <BannerInfo />

        {/* Banner registro de producto */}
        <BannerRProducto />
        <div className="btn_producto">
          <button>Empezar a vender</button>
        </div>

        {/* Imagenes informativas */}
        <div className="emprendedor_informativo">
          <div className="informativo_card card1">
            <img
              className="card_imagen"
              src=""
              alt="icono apoya a la economia circular"
              title="Apoyo a la economía
circular"
            />
            <div className="card_content"></div>
          </div>
          <div className="informativo_card card2"></div>
          <div className="informativo_card card3"></div>
        </div>
      </div>
    </>
  );
}

export default Emprendedor;
