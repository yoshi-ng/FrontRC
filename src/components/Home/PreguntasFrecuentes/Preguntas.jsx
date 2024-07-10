/* Header es el mismo que el de la vista general
Body incluye 3 secciones Centro de ayuda, preguntas frecuentes, medios de pago
Footer es el mismo */

import React, { useState } from "react";
import "./Preguntas.css";

const Preguntas = () => {
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);

  const togglePregunta = (index) => {
    if (preguntaSeleccionada === index) {
      setPreguntaSeleccionada(null);
    } else {
      setPreguntaSeleccionada(index);
    }
  };

  return (
    <div className="Preguntas-contenedor">
      <h1 className="Preguntas-titulo">Preguntas Frecuentes</h1>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(0)}>
          ¿Cómo puedo comenzar a vender en la página?
        </div>
        {preguntaSeleccionada === 0 && (
          <div className="Preguntas-respuesta">
            Antes de poder publicar tus productos, es necesario que te registres
            en la plataforma. Después de completar el registro, podrás abrir una
            cuenta con nosotros y empezar a añadir tus productos para venderlos.
            Debes dar datos esenciales como el título del artículo, precio,
            descripción y fotografías reales.
          </div>
        )}
      </div>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(1)}>
          ¿Cómo puedo registrarme?
        </div>
        {preguntaSeleccionada === 1 && (
          <div className="Preguntas-respuesta">
            Para registrarte y comenzar a vender tus productos sustentables, haz
            click en el icono de tu perfil al extremo superior derecho y
            completa el formulario con tus datos personales.
          </div>
        )}
      </div>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(2)}>
          ¿Es seguro publicar mis productos en Residuo Creativo?
        </div>
        {preguntaSeleccionada === 2 && (
          <div className="Preguntas-respuesta">
            Sí, es seguro mostrar tus productos en nuestra plataforma. A pesar
            de que facilitamos la comunicación entre vendedores y compradores,
            tanto la venta como la transacción se concreta fuera de nuestra
            plataforma, utilizando tus redes sociales u otros medios de contacto
            que elijas. Asimismo, sugerimos mantener buenos hábitos de seguridad
            al proporcionar información personal y financiera a posibles
            compradores.
          </div>
        )}
      </div>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(3)}>
          ¿Qué clase de productos puedo vender?
        </div>
        {preguntaSeleccionada === 3 && (
          <div className="Preguntas-respuesta">
            Nuestro sitio web está pensado para comercializar artículos
            fabricados con materiales reciclados. Es posible vender diversos
            productos como artesanías, vestuario, accesorios, productos
            orgánicos, juguetes, entre otros, siempre y cuando estén fabricados
            con materiales reciclados.
          </div>
        )}
      </div>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(4)}>
          ¿Hay algún costo asociado por publicar mis productos en la plataforma?
        </div>
        {preguntaSeleccionada === 4 && (
          <div className="Preguntas-respuesta">
            No, publicar artículos es de manera gratuita y no tiene ningún costo
            asociado.
          </div>
        )}
      </div>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(5)}>
          ¿De qué manera se gestionan las transacciones de compra?
        </div>
        {preguntaSeleccionada === 5 && (
          <div className="Preguntas-respuesta">
            La plataforma no permite realizar compras directamente. Los
            compradores interesados en tus productos se comunicarán contigo
            mediante las redes sociales que hayas especificado en tu perfil como
            vendedor. De este modo, puedes concretar la venta directamente con
            el comprador.
          </div>
        )}
      </div>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(6)}>
          ¿Es posible editar o borrar mis publicaciones después de que hayan
          sido subidos a la plataforma?
        </div>
        {preguntaSeleccionada === 6 && (
          <div className="Preguntas-respuesta">
            Claro, en cualquier momento puedes modificar o borrar tus
            publicaciones. Solo ingresa a tu cuenta, busca la publicación que
            quieres cambiar y haz las modificaciones requeridas o elimínala si
            es necesario.
          </div>
        )}
      </div>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(7)}>
          Si necesito ayuda, ¿cómo me puedo comunicar con soporte?
        </div>
        {preguntaSeleccionada === 7 && (
          <div className="Preguntas-respuesta">
            Puedes contactarte con nosotros a través del centro de ayuda o
            nuestras redes sociales.
          </div>
        )}
      </div>
      <div className="Preguntas">
        <div className="Preguntas-pregunta" onClick={() => togglePregunta(8)}>
          ¿Existe un límite de publicaciones que se pueden hacer?
        </div>
        {preguntaSeleccionada === 8 && (
          <div className="Preguntas-respuesta">
            No, puedes vender cuantos productos desees. Recuerda seguir nuestros
            consejos para publicar un producto y mantén actualizadas tus
            publicaciones.
          </div>
        )}
      </div>
    </div>
  );
};

export default Preguntas;
