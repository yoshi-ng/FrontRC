import "./Emprendedor.css";
import fondo1 from "../../../components/assets/PerfilEmprendedores/fondo1.png";
import icono from "../../../components/assets/PerfilEmprendedores/icono_mundo.svg";
import Boton from "../../../components/Botones/Boton";
import BannerEmprendedor from "../../../components/BannerEmprendedor/BannerEmprendedor";
import BannerInfo from "../../../components/BannerInfo/BannerInfo";

function Emprendedor() {
  return (
    <>
      <div className="pagina_inicio_emprendedor">
        {/* Banner principal */}
        <div className="emprendedor_tienda">
          <BannerEmprendedor
            tittle={"¡Hola, Emprendedor!"}
            text={
              "Cientos de compradores estan ansiosos por conocer tus productos"
            }
            close={"¡Empieza ya!"}
            background={fondo1}
          />
          <div className="btn_tienda">
            <Boton text="Abrir mi tienda" />
          </div>
        </div>

        {/* Instrucciones */}
        <div className="emprendedor_instrucciones">
          <div className="instrucciones_banner">
            <div className="foto">
              <img src={icono} alt="comprometidos con el mundo" />
            </div>
            <div className="texto">
              <h2>
                Residuo Creativo está comprometido con la ley de reciclaje
              </h2>
            </div>
          </div>
          <div className="instrucciones_titulo">
            <h2>
              Vende en cuestión de minutos y accede a una comunidad de
              compradores más consciente
            </h2>
          </div>
          <div className="instrucciones_contenido">
            <div className="imagen_izquierda"></div>
            <ul className="insrucciones_lista">
              <li className="lista_item">Escoge el nombre de tu tienda</li>
              <li>
                Elige un nombre atractivo y único para tu tienda que refleje tu
                visión.
              </li>
              <li className="lista_item">
                Cuéntanos sobre tu tienda sustentable
              </li>
              <li className="lista_item">
                Agrega la información de tu tienda como la descripción,
                contacto, métodos de pago y fotografía representativa.
              </li>
              <li className="lista_item">Publica y amplía tus clientes</li>
              <li className="lista_item">
                Comparte tu tienda con una comunidad de compradores conscientes,
                publica tus productos y empieza a recibir pedidos de los
                compradores.
              </li>
            </ul>
          </div>
        </div>

        {/* Banner registro de producto */}
        <div className="emprendedor_registro_producto">
          <div className="registro_producto_texto">
            {" "}
            Si eres un emprendedor comprometido con el medioambiente y quieres
            vender productos ecológicos en pocos pasos, este es tu lugar
          </div>
          <div className="btn btn_producto">
            <button>Empezar a vender</button>
          </div>
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
