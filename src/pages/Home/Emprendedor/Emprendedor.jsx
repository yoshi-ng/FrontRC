/* Header es el mismo, solo se personaliza el saludo con el nombre del usuario que ingresa 
Body inlcuye una presentacion general, secciones informativas, y un boton que te lleva a publicar un producto nuevo
Footer es el mismo, sin cambios*/
import React from "react";

function Emprendedor() {
  return (
    <>
      <div className="pagina_inicio_emprendedor">
        <div className="emprendedor_tienda">
          <div className="tienda_texto">
            <p>¡Hola, Emprendedor!</p>
            <p>
              Cientos de compradores estan ansiosos por conocer tus productos
            </p>
            <p>¡Empieza ya!</p>
          </div>
          <div className="btn btn_tienda">
            <button>Abrir mi tienda</button>
          </div>
        </div>
        <div className="emprendedor_instrucciones">
          <div className="instrucciones_banner">
            <div className="foto"></div>
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
