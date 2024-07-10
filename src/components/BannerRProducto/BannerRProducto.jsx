import "./BannerRProducto.css";
import fondo2 from "../assets/PerfilEmprendedores/fondo2.png";

function BannerRProducto() {
  return (
    <div className="emprendedor_registro_producto">
      <img src={fondo2} alt="fondo banner registro de producto" />
      <div className="registro_producto_texto">
        <p>
          Si eres un emprendedor comprometido con el medioambiente y quieres
          vender productos ecológicos en pocos pasos, este es tu lugar.
        </p>
      </div>
    </div>
  );
}

export default BannerRProducto;
