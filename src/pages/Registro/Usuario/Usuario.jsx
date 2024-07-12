import "./Usuario.css";
import axios from "axios";
import { useState, createContext } from "react";
import ico_foto from "../../../components/assets/Icons/camara.svg";
import punto from "../../../components/assets/Icons/punto.svg";
import flecha_i from "../../../components/assets/Icons/clip_L.svg";
import flecha_d from "../../../components/assets/Icons/clip_R.svg";

function Usuario(formulario) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [numero, setNumero] = useState(0);
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");

  return (
    <>
      <div>
        <div className="primera_parte">
          <h1 className="info">Información de tu tienda</h1>
          <div className="foto">
            <img src={ico_foto} alt="" />
            <p className="texto_ft">Foto tienda</p>
          </div>

          <form
            className="formulario"
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <div className="contenedor_nombre" style={{ marginTop: "20px" }}>
              <p>Nombre de tu tienda</p>
              <input
                className="input input_nombre"
                name="nombre"
                type="text"
                value={nombre}
                placeholder="Escribe el nombre de tu tienda"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="descripcion" style={{ marginTop: "20px" }}>
              <p className="dest">Descripción de la tienda</p>
              <input
                className="input input_descripcion"
                name="descripcion"
                type="text"
                value={descripcion}
                placeholder="Escribe la descripcion de tu tienda"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
          </form>
        </div>
        {/* <div>
          <h2>Nombre</h2>
        </div>
        <div className="Descripcion">Descripción</div> */}
        <div className="contenedor_mdp">
          <div className="encabezado_mdp">
            <h2>Métodos de pago</h2>
            <p>
              Selecciona todos los métodos de pago que aceptes de los
              compradores
            </p>
          </div>
          <div className="metodos_pago">
            <div className="mdp_t_e_izquierdo">
              <div className="transferencia">
                <img src={punto} alt="Transferencia" />
                <p>Transferencia</p>
              </div>
              <div className="efectivo">
                <img src={punto} alt="Efectivo" />
                <p>Efectivo</p>
              </div>
            </div>
            <div className="mdp_c_d_derecho">
              <div className="credito">
                <img src={punto} alt="Crédito" />
                <p>Crédito</p>
              </div>
              <div className="debito">
                <img src={punto} alt="Débito" />
                <p>Débito</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="formulario_contacto"
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <div className="global_contacto">
            <div className="contenedor_contacto">
              <h2 className="contacto">Contacto</h2>
              <p className="info_contacto">
                Añade la información de contacto por donde los clientes te
                contactarán para comprar tus productos.
              </p>
            </div>
            <div className="numero">
              <h3 className="texto_numero">Número</h3>
              <input
                className="input input_num"
                name="numero"
                type="number"
                value={numero}
                placeholder="Ingresa el número telefónico por el cual los compradores se comunicarán contigo. "
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>

            <div className="ig">
              <h3>Instagram</h3>
              <input
                className="input input_ig"
                name="instagram"
                type="text"
                value={instagram}
                placeholder="Escribe el enlace de la cuenta de Instagram de tu tienda."
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
            <div className="fb">
              <h3>Facebook</h3>
              <input
                className="input input_fb"
                name="facebook"
                type="text"
                value={facebook}
                placeholder="Escribe la página de Facebook de tu tienda."
                onChange={(e) => setFacebook(e.target.value)}
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

export default Usuario;
