import { useEffect, useState } from "react";
import fondo1 from "../assets/Tienda/fondo_tienda.webp";

import data from "../../components/assets/all_tiendas";
import "./TiendaId.css";

function TiendaId({ id }) {
  const [tienda, setTienda] = useState({ id });

  useEffect(() => {
    const tiendas = data.find((tiend) => tiend.id == id);
    setTienda(tiendas);
  }, []);

  return (
    <>
      <div className="contenedor_tiendaId_item">
        <img src={fondo1} alt="" />
        <div className="contenedor_tiendaId_texto">
          <h2 className="tiendaID_nombre">{tienda.nombre}</h2>
          <div className="tiendaID_detalle">
            <p className="tiendaID_titulo">Descripcion de la tienda:</p>
            <p className="tiendaID_descripcion">{tienda.descripcion}</p>
            <p className="tiendaID_titulo">Contacto:</p>
            <p className="tiendaID_telefono">+56 9 {tienda.telefono}</p>
            <p className="tiendaID_instagram">Instagram: {tienda.instagram}</p>
            <p className="tiendaID_facebook">Facebook: {tienda.facebook}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TiendaId;
