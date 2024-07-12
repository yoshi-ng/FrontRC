import "./MediosPago.css";
import fondo1 from "../../../components/assets/PagosDisponibles/Fondo1.jpg";
import icon1 from "../../../components/assets/PagosDisponibles/icon1.png";

function MediosPago() {
  return (
    <div className="contenedor_pagos">
      <img src={fondo1} alt="" className="pagos_fondo" />
      <div className="pagos_texto">
        <h2 className="pagos_titulo">Medios de pagos disponibles</h2>
        <div className="pagos_detalle">
          <p className="pagos_parrafo">
            Queremos compartir contigo que en nuestra página web ofrecemos un
            espacio dedicado a emprendedores talentosos que muestran sus
            productos únicos y creativos. Creemos firmemente en apoyar el
            espíritu emprendedor y facilitar a nuestros usuarios una experiencia
            de compra accesible y conveniente.
          </p>
          <p className="pagos_parrafo">
            En este sentido, nos complace informarte que cada emprendedor tiene
            habilitados diversos medios de pago en su tienda virtual. Esto
            incluye opciones como tarjetas de crédito y débito, transferencias
            bancarias, y otros métodos electrónicos de pago seguros y
            confiables. Cada emprendedor gestiona de manera autónoma los
            detalles específicos de los pagos, asegurando así que puedas
            realizar tus compras de manera sencilla y transparente.
          </p>
          <p className="pagos_parrafo">
            Entendemos la importancia de la confianza y la claridad en las
            transacciones comerciales en línea. Por lo tanto, si tienes alguna
            pregunta o necesitas más información sobre los métodos de pago
            disponibles en alguna tienda en particular, te recomendamos
            comunicarte directamente con el emprendedor correspondiente. Ellos
            estarán encantados de brindarte la asistencia necesaria y resolver
            cualquier inquietud que puedas tener.
          </p>
          <p className="pagos_parrafo">
            Agradecemos tu interés y confianza en nuestra plataforma como un
            espacio para descubrir productos originales y apoyar a emprendedores
            locales. ¡Esperamos que disfrutes de tu experiencia de compra con
            nosotros!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MediosPago;
