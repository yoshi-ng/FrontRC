import "./Usuario.css";
import { useState } from "react";
import ico_foto from "../../../components/assets/Icons/camara.svg";
import punto from "../../../components/assets/Icons/punto.svg";
import Boton from "../../../components/Botones/Boton";

function Tienda() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [numero, setNumero] = useState(0);
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  return (
    <>
      <div className="contenedor_registro_usuario">
        <div className="registro_usuario_primeraParte">
          <h1 className="registro_usuario_titulo">Registro de usuario</h1>
          <div className="registro_usuario_foto">
            <img src={ico_foto} alt="" />
            <p className="usuario_foto_titulo">Foto de perfil</p>
          </div>

          <form
            className="registro_usuario_formulario"
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <div className="contenedor_usuario_nombre">
              <p>Nombre</p>
              <input
                className="inputUsuario inputNombre"
                name="nombre"
                type="text"
                value={nombre}
                placeholder="Escribe el nombre de tu tienda"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="contenedor_usuario_apellido">
              <p>Apellido</p>
              <input
                className="inputUsuario input_usuario_apellido"
                name="descripcion"
                type="text"
                value={descripcion}
                placeholder="Escribe la descripcion de tu tienda"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            <div className="contenedor_usuario_correo">
              <p>Correo</p>
              <input
                className="inputCorreo input_correo_descripcion"
                name="descripcion"
                type="text"
                value={descripcion}
                placeholder="Escribe la descripcion de tu tienda"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
          </form>

          <div className="contenedor_usuario_direccion">
            <p>Direccion</p>
            <input
              className="inputDireccion input_usuario_direccion"
              name="descripcion"
              type="text"
              value={descripcion}
              placeholder="Escribe la descripcion de tu tienda"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tienda;
