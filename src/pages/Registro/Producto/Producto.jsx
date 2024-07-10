import { useState } from "react";

/* Header es el mismo que del empredendor, con el saludo personalizado
Body seccion para agregar fotos y el form correspondiente para llenar todos los datos solicitados, boton publicar. 
Footer es el mismo */

function Producto() {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: null,
    stock: null,
  });
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <div style={{ marginTop: "200px" }}>
        <input
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <input name="descripcion" type="text" />
      </div>
      <div>
        <input name="precio" type="number" />
      </div>
      <div>
        <input name="stock" type="number" />
      </div>
    </>
  );
}

export default Producto;
