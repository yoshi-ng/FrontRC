import "./Producto.css";
import { useState } from "react";
import ico_foto from "../../../components/assets/Icons/camara.svg";

function Tienda() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  return (
    <>
      <div className="contenedor_registro_tienda">
        <div className="registro_tienda_primeraParte">
          <h1 className="registro_tienda_titulo">Registra tu producto</h1>
          <div className="registro_tienda_foto">
            <img src={ico_foto} alt="" />
            <p className="tienda_foto_titulo">Foto del producto</p>
          </div>

          <form
            className="registro_tienda_formulario"
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <div className="contenedor_tienda_nombre">
              <p>Nombre del producto</p>
              <input
                className="inputTienda inputNombre"
                name="nombre"
                type="text"
                value={nombre}
                placeholder="Escribe el nombre de tu tienda"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="contenedor_tienda_descripcion">
              <p>Descripción del producto</p>
              <input
                className="inputTienda input_tienda_descripcion"
                name="descripcion"
                type="text"
                value={descripcion}
                placeholder="Escribe la descripcion de tu tienda"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div className="contenedor_tienda_categoria">
              <p>Categoria del producto</p>
              <input
                className="inputTienda inputCategoria"
                name="nombre"
                type="text"
                value={nombre}
                placeholder="Escribe el nombre de tu tienda"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Tienda;
