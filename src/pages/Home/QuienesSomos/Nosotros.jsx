import mano from "../../../components/assets/General/mano.png";
import "./Nosotros.css";

function Nosotros() {
  return (
    <div className="nosotros" style={{ padding: "25px", paddingTop: "20px" }}>
      <div>
        <h1 style={{ marginBottom: "20px" }}>
          <b>¿Quiénes Somos?</b>
        </h1>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ marginBottom: "14px" }}>
            <h3 style={{ marginBottom: "10px" }}>
              <b style={{ fontWeight: "bolder" }}>¿Quiénes Somos?</b>
            </h3>
            <p>
              Somos una pagina dedicada a apoyar a los emprendedores que se
              registran en nuestra plataforma para vender sus productos a
              usuarios interesados.{" "}
            </p>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <h3 style={{ marginBottom: "10px" }}>
              <b style={{ fontWeight: "bolder" }}>Nuestra Historia</b>
            </h3>
            <p>
              Creamos una aplicación web que promueva la reutilización y el
              reciclaje, y empodere a los emprendedores a generar ingresos
              sostenibles. Inspirados por la creatividad de quienes ven
              oportunidades en los desechos, conectamos sus ideas brillantes con
              un mercado de consumidores conscientes.
            </p>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <h3 style={{ marginBottom: "10px" }}>
              <b style={{ fontWeight: "bolder" }}>¿Qué hacemos?</b>
            </h3>
            <p>
              Proporcionamos un espacio donde los emprendedores pueden registrar
              y mostrar sus productos reciclados, destacando el impacto positivo
              que cada artículo tiene en el medio ambiente. Los usuarios pueden
              explorar nuestra colección diversa y contactar directamente con
              los emprendedores para adquirir su producto.
            </p>
          </div>
          <div style={{ marginBottom: "14px" }}>
            <h3 style={{ marginBottom: "10px" }}>
              <b style={{ fontWeight: "bolder" }}>Nuestra Misión</b>
            </h3>
            <p>
              Nuestra misión es apoyar a los emprendedores para que puedan
              vender en nuestra aplicación web sus productos hechos con
              materiales reciclados, de segunda mano y orgánicos. Promovemos
              productos valiosos e innovadores que beneficien a nuestro planeta.
            </p>
          </div>
          <p>
            <b>
              Donde reciclaje y creatividad se unen en un emprendimiento
              comprometido con el medioambiente.
            </b>
          </p>
        </div>
        <div>
          <img src={mano} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
