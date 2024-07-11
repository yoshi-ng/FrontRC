import "./InicioSesion.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

function InicioSesion() {
  return (
    <card className="Contenedor">
      <div className="cuadro-inicio">
        <form action="">
          <hi>Acceso ResiduoCreativo</hi>
          <div className="caja_input">
            <input type="text" required placeholder="Email" />
            <FaUser className="icono" />
          </div>
          <div className="caja_input">
            <input type="password" required placeholder="Contraseña" />
            <RiLockPasswordLine className="icono" />
          </div>
          <div className="Olvido_contraseña">
            <label htmlFor="">
              {" "}
              <input type="checkbox" />
              Guardar Contraseña
            </label>
            <a href=""> ¿Olvidaste tu contraseña? </a>
          </div>
          <button type="submit">Iniciar Sesión</button>

          <div className="Link-registro">
            <p>
              ¿Aún no eres parte de nuestra comunidad?{" "}
              <a href="">Únete ahora</a>
            </p>
          </div>
        </form>
      </div>
    </card>
  );
}

export default InicioSesion;
