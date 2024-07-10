import { useEffect, useState } from "react";

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
      <div className="contenedor_item">
        <div className="contenedor_texto">
          <h2 className="nombre">{tienda.nombre}</h2>
          <div className="detalle">
            <p className="titulo">Descripcion de la tienda:</p>
            <p className="descripcion">{tienda.descripcion}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TiendaId;
