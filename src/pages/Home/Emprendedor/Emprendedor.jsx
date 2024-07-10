import "./Emprendedor.css";

import Boton from "../../../components/Botones/Boton";
import BannerEmprendedor from "../../../components/BannerEmprendedor/BannerEmprendedor";
import BannerInfo from "../../../components/BannerInfo/BannerInfo";
import BannerRProducto from "../../../components/BannerRProducto/BannerRProducto";
import PropuestaValor from "../../../components/PropuestaValor/PropuestaValor";

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

        {/* Imagenes informativas */}
        <div className="emprendedor_informativo">
          <PropuestaValor />
        </div>

        {/* Banner registro de producto */}
        <div className="registro_producto">
          <BannerRProducto />
          <div className="btn btn_producto">
            <button>Empezar a vender</button>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="banner_informativo">
          <BannerInfo />
        </div>
      </div>
    </>
  );
}

export default Emprendedor;
