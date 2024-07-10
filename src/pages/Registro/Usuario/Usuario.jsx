import { useState } from "react";
import axios from "axios";

/* Header es el mismo que el general
Body seccion para agregar foto de perfil(una foto por defecto y opcion de personalizar) y el form correspondiente para llenar todos los datos solicitados, boton guardar. 
Footer es el mismo */

const baseURL = "http://localhost:8080/api/producto/agregar";

function Usuario() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = () => {
    const data = {
      nombre: nombre,
      descripcion: descripcion,
      /*       imagen: "imagenDecoracion1", */
      precio: precio,
      stock: stock,
    };
    axios.post(baseURL, data).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <div style={{ marginTop: "200px" }}>
          <input
            name="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {nombre}
        </div>
        <div>
          <input
            name="descripcion"
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          {descripcion}
        </div>
        <div>
          <input
            name="precio"
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          {precio}
        </div>
        <div>
          <input
            name="stock"
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          {stock}
        </div>
        <input type="submit" />
      </form>
    </>
  );
}

export default Usuario;
