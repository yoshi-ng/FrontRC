import "./PropuestaValor.css";
import propuesta1 from "../assets/PerfilEmprendedores/propuesta1.png";
import propuesta2 from "../assets/PerfilEmprendedores/propuesta2.png";
import propuesta3 from "../assets/PerfilEmprendedores/propuesta3.png";

function PropuestaValor() {
  return (
    <div className="emprendedor_informativo">
      <h2 className="titulo_propuesta">
        ÚNETE A NOSOTROS POR UN FUTURO MÁS SOSTENIBLE
      </h2>

      <div className="cards_informativos">
        {/* Card1 */}
        <div className="informativo_card card1">
          <img
            className="card_imagen"
            src={propuesta1}
            alt="icono apoya a la economia circular"
          />
          <h2 className="card_tittle">Apoyo a la economía circular</h2>
          <div className="card_content">
            <p className="card_content">
              Facilitamos la venta de artículos hechos con materiales
              reciclados, cerrando así su ciclo de vida
            </p>
          </div>
        </div>

        {/* Card2 */}
        <div className="informativo_card card2">
          <img
            className="card_imagen"
            src={propuesta2}
            alt="icono apoya a la economia circular"
          />
          <h2 className="card_tittle">Reducción de residuos</h2>
          <div className="card_content">
            <p className="card_content">
              Impulsamos la disminución de desechos al incentivar la
              reutilización y el reciclaje en la producción y el consumo
            </p>
          </div>
        </div>

        {/* Card3 */}
        <div className="informativo_card card3">
          <img
            className="card_imagen"
            src={propuesta3}
            alt="icono apoya a la economia circular"
          />
          <h2 className="card_tittle">Promoción del reciclaje</h2>
          <div className="card_content">
            <p className="card_content">
              Fomentamos la práctica del reciclaje al reutilizar materiales en
              los productos publicados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropuestaValor;
