import "./BannerInfo.css";
import icono from "../assets/PerfilEmprendedores/icono_mundo.svg";
import lineaLateral from "../assets/PerfilEmprendedores/lineaLateral.png";

function BannerInfo() {
  return (
    <div className="emprendedor_instrucciones">
      {/* Banner naranjo */}
      <div className="instrucciones_banner">
        <div className="instrucciones_foto">
          <img src={icono} alt="comprometidos con el mundo" />
        </div>
        <div className="instrucciones_texto">
          <h2>Residuo Creativo está comprometido con la ley de reciclaje</h2>
        </div>
      </div>

      {/* Titulo instrucciones */}
      <div className="instrucciones_titulo">
        <h2>
          Vende en cuestión de minutos y accede a una comunidad de compradores
          más consciente
        </h2>
      </div>

      {/* Lista de instrucciones con imagen */}
      <div className="instrucciones_contenido">
        <div className="imagen_izquierda">
          <img src={lineaLateral} alt="guia lista de instrucciones" />
        </div>
        <ul className="insrucciones_lista">
          <li className="lista_item">Escoge el nombre de tu tienda</li>
          <li className="lista_item">
            Elige un nombre atractivo y único para tu tienda que refleje tu
            visión.
          </li>
          <li className="lista_item">Cuéntanos sobre tu tienda sustentable</li>
          <li className="lista_item">
            Agrega la información de tu tienda como la descripción, contacto,
            métodos de pago y fotografía representativa.
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
  );
}

export default BannerInfo;
