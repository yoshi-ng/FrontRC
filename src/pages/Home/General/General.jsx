import "./General.css";
import Banner1 from "../../../components/HomeGeneral1/HomeGeneral1";
import Banner2 from "../../../components/HomeGeneral2/HomeGeneral2";
import Banner4 from "../../../components/HomeGeneral4/HomeGeneral4";

function General() {
  return (
    <div className="contenedor_homeGeneral">
      {/* Banner 1 */}
      <div className="contenedor_homeGeneral_banner1">
        <Banner1 />
      </div>

      {/* Banner 2 */}
      <div className="contenedor_homeGeneral_banner2">
        <Banner2 />
      </div>

      {/* Banner 3 */}
      {/*       <div className="contenedor_homeGeneral_banner3">
        <h2 className="homeGeneral_banner3_titulo">TIENDAS DE EMPRENDEDORES</h2>
        <div className="homeGeneral_banner3_tarjetas">
          <div className="homeGeneral_banner3_tarjeta1"></div>
          <div className="homeGeneral_banner3_tarjeta2"></div>
          <div className="homeGeneral_banner3_tarjeta3"></div>
          <div className="homeGeneral_banner3_tarjeta4"></div>
          <div className="homeGeneral_banner3_tarjeta5"></div>
        </div>
      </div> */}

      {/* Banner 4 */}
      <div className="contenedor_homeGeneral_banner4">
        <Banner4 />
      </div>
    </div>
  );
}

export default General;
