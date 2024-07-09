import React from "react";
import "./Footer.css";
import twitter from "../assets/Icons/twitter.png";
import facebook from "../assets/Icons/facebook.png";
import instagram from "../assets/Icons/instagram.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>Acerca de Residuo Creativo</h4>
            <a href="#">
              <p>¿Quiénes somos?</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>¿Necesitas ayuda?</h4>
            <a href="#">
              <p>Centro de ayuda</p>
            </a>
            <a href="#">
              <p>Preguntas frecuentes</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Medios de pago</h4>
            <a href="#">
              <p>Revisa los medios de pago disponibles</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Nuestras Redes Sociales</h4>
            <div className="social">
              <p>
                <img src={facebook} alt="Facebook" />
              </p>
              <p>
                <img src={instagram} alt="Instagram" />
              </p>
              <p>
                <img src={twitter} alt="Twitter" />
              </p>
            </div>
          </div>
        </div>

        <div className="sb__footer__abajo">
          <div className="sb__footer__copyright">
            <p>&copy; {currentYear} Residuo Creativo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
