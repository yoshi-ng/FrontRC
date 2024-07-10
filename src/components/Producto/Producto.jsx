import { useEffect, useState } from "react";
import "./Productos.css";
import data from "../assets/all_product";
import clp from "../Clp";

function Productos({ id }) {
  const [itemProducto, setItemProducto] = useState({ id });
  useEffect(() => {
    const items = data.find((prod) => prod.id == id);
    setItemProducto(items);
  }, []);

  return (
    <>
      <div className="contenedor_item">
        <div className="contenedor_imagen">
          <img src={itemProducto.imagen} alt={itemProducto.descripcion} />
        </div>

        <div className="contenedor_texto">
          <h2 className="nombre">{itemProducto.nombre}</h2>
          <div className="detalle">
            <p className="titulo">Descripcion del producto:</p>
            <p className="descripcion">{itemProducto.descripcion}</p>
          </div>
          <div className="stock">{itemProducto.stock} unidades disponibles</div>
          <div className="precio">{clp(itemProducto.precio)}</div>
        </div>
      </div>
    </>
  );
}

export default Productos;
