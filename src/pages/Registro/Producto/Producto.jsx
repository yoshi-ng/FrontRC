import "./Producto.css";
import axios from "axios";
import { useState, createContext } from "react";
import ico_foto from "../../../components/assets/Icons/camara.svg";
import agregar_foto from "../../../components/assets/Icons/subir_foto.svg";

function Producto() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [otros, setOtros] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  return (
    <>
      <div>
        <div className="primera_parte">
          <h1 className="encabezado">PUBLICAR UN PRODUCTO</h1>
          <p>
            Puedes subir hasta 5 imágenes. Recuerda tomar las fotografías con
            buena luz y un fondo neutro.
          </p>
          <div className="foto">
            <img src={ico_foto} alt="" />
            <p className="texto_fp">Foto producto</p>
          </div>
          <div className="agregar_foto">
            <img src={agregar_foto} alt="" />
          </div>
          <div className="foto1">
            <img src={ico_foto} alt="" />
            <p className="texto1">Foto 1</p>
          </div>
          <div className="foto2">
            <img src={ico_foto} alt="" />
            <p className="texto2">Foto 2</p>
          </div>
          <div className="foto3">
            <img src={ico_foto} alt="" />
            <p className="texto3">Foto 3</p>
          </div>
          <div className="foto4">
            <img src={ico_foto} alt="" />
            <p className="texto4">Foto 4</p>
          </div>
        </div>
        <form
          className="formulario"
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <div className="segunda_parte">
            <div className="contenedor_nombre" style={{ marginTop: "80px" }}>
              <h2>Nombre del producto</h2>
              <input
                className="input input_nombre"
                name="nombre"
                type="text"
                value={nombre}
                placeholder="Escoge un nombre llamativo para el producto que desees vender."
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="descripcion" style={{ marginTop: "20px" }}>
              <h2>Descripción del producto</h2>
              <input
                className="input input_descripcion"
                name="descripcion"
                type="text"
                value={descripcion}
                placeholder="Cuéntanos brevemente sobre el producto que quieres publicar. Considera datos como las dimensiones, los materiales utilizados, colores disponibles, etc."
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
          </div>
          <div className="contenedor_mr">
            <div className="encabezado_mr">
              <h2>Materiales reciclados</h2>
              <p className="descripcion_mr">
                Selecciona todos los materiales que hayas reutilizado en el
                proceso de fabricación del artículo. Si no aparece, agrégalo.
              </p>
            </div>
            <div className="mr_izquierda">
              <div className="papel">
                <img src={punto} alt="Papel" />
                <p>Papel</p>
              </div>
              <div className="telas">
                <img src={punto} alt="Telas" />
                <p>Telas, elementos textiles</p>
              </div>
            </div>
            <div className="mr_centro">
              <div className="plastico">
                <img src={punto} alt="Plastico" />
                <p>Plástico</p>
              </div>
              <div className="latas">
                <img src={punto} alt="Latas_Aluminio_Metales" />
                <p>Latas, aluminio, metales</p>
              </div>
            </div>
            <div className="mr_derecha">
              <div className="vidrio">
                <img src={punto} alt="vidrio" />
                <p>Vidrio, porcelana, azulejos, cerámicas</p>
              </div>
              <div className="otros">
                <img src={punto} alt="otros" />
                <input
                  className="input input_otros"
                  name="otros"
                  type="text"
                  value={otros}
                  onChange={(e) => setOtros(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="parte_inferior">
            <div className="precio">
              <p>Precio</p>
              <input
                className="input"
                name="precio"
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>

            <div className="stock">
              <p>Stock</p>
              <input
                className="input"
                name="stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="btn">
              <input className="btn_submit" type="submit"></input>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Producto;
