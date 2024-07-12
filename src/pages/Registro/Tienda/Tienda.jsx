import "./Tienda.css";
import { useState } from "react";
import ico_foto from "../../../components/assets/Icons/camara.svg";
import punto from "../../../components/assets/Icons/punto.svg";
import Boton from "../../../components/Botones/Boton";

function Tienda(formulario) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [numero, setNumero] = useState(0);
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  return (
    <>
      <div className="contenedor_registro_tienda">
        <div className="registro_tienda_primeraParte">
          <h1 className="registro_tienda_titulo">Información de tu tienda</h1>
          <div className="registro_tienda_foto">
            <img src={ico_foto} alt="" />
            <p className="tienda_foto_titulo">Foto tienda</p>
          </div>

          <form
            className="registro_tienda_formulario"
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <div className="contenedor_tienda_nombre">
              <p>Nombre de tu tienda</p>
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
              <p>Descripción de la tienda</p>
              <input
                className="inputTienda input_tienda_descripcion"
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
        <div className="contenedor_registro_tienda_pagos">
          <div className="tienda_pagos_titulo">
            <h2>Métodos de pago</h2>
            <p>
              Selecciona todos los métodos de pago que aceptes de los
              compradores
            </p>
          </div>
          <div className="tienda_metodos_pago">
            <div className="tienda_pagos_left">
              <div className="pago_transferencia">
                <img src={punto} alt="Transferencia" />
                <p>Transferencia</p>
              </div>
              <div className="pago_efectivo">
                <img src={punto} alt="Efectivo" />
                <p>Efectivo</p>
              </div>
            </div>
            <div className="tienda_pagos_right">
              <div className="pago_credito">
                <img src={punto} alt="Crédito" />
                <p>Crédito</p>
              </div>
              <div className="pago_debito">
                <img src={punto} alt="Débito" />
                <p>Débito</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="formulario_contacto_tienda"
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <div className="container_tienda_contacto">
            <div className="tienda_contacto_cabecera">
              <h2 className="tienda_contacto_titulo">Contacto</h2>
              <p className="tienda_contacto_descripcion">
                Añade la información de contacto por donde los clientes te
                contactarán para comprar tus productos.
              </p>
            </div>
            <div className="registro_tienda_numero">
              <h3 className="tienda_inputNumero_titulo">Número</h3>
              <input
                className="inputTienda inputNumero"
                name="numero"
                type="number"
                value={numero}
                placeholder="Ingresa el número telefónico por el cual los compradores se comunicarán contigo. "
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>

            <div className="tienda_ig">
              <h3>Instagram</h3>
              <input
                className="inputTienda inputIg"
                name="instagram"
                type="text"
                value={instagram}
                placeholder="Escribe el enlace de la cuenta de Instagram de tu tienda."
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
            <div className="tienda_fb">
              <h3>Facebook</h3>
              <input
                className="inputTienda inputFb"
                name="facebook"
                type="text"
                value={facebook}
                placeholder="Escribe la página de Facebook de tu tienda."
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>

            <div className="btnRegistrarTienda">
              <Boton text="Registrar"></Boton>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Tienda;
