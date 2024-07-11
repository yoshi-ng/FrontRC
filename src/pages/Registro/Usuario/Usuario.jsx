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
        <h1 className="encabezado">Información de tu tienda</h1>
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
        {/* <div>
          <h2>Nombre</h2>
        </div>
        <div className="Descripcion">Descripción</div> */}

        <section className="contenedor_mdp">
          <h2 className="mdp">Métodos de pago</h2>
          <p className="info_mdp">
            Selecciona todos los métodos de pago que aceptes de los compradores
          </p>
          <div className="transferencia">
            <img src={punto} alt="Transferencia" />
            <p>Transferencia</p>
          </div>
          <div className="efectivo">
            <img src={punto} alt="Efectivo" />
            <p>Efectivo</p>
          </div>
          <div className="credito">
            <img src={punto} alt="Crédito" />
            <p>Crédito</p>
          </div>
          <div className="debito">
            <img src={punto} alt="Débito" />
            <p>Débito</p>
          </div>
        </section>

        <form
          className="formulario"
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <div className="contenedor_conctacto">
            <h2 className="contacto">Contacto</h2>
            <p className="info_contacto">
              Añade la información de contacto por donde los clientes te
              contactarán para comprar tus productos.
            </p>
          </div>
          <h3>Número</h3>
          <div className="numero">
            <input
              className="input input_num"
              name="numero"
              type="number"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            {numero}
          </div>

          <h3>Instagram</h3>
          <div className="ig">
            <input
              className="input input_ig"
              name="instagram"
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
            />
            {instagram}
          </div>

          <h3>Facebook</h3>
          <div className="fb">
            <input
              className="input input_fb"
              name="facebook"
              type="text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
            />
            {facebook}
          </div>

          <div>
            <input className="btn_submit" type="submit"></input>
          </div>
        </form>
        <div>
          <div className="contenedor_catalogo">
            <h2 className="encabezado_catalogo">
              Catálogo de productos publicados
            </h2>
            <div className="catalogo">
              <img className="fi" src={flecha_i} alt="" />

              {/* como poner las fotos para que corran */}

              <img src={flecha_d} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usuario;
