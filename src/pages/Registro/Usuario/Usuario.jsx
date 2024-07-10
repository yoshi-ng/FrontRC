import "./Usuario.css";
import ico_foto from "./assets/Icons/camara_user.svg";
import punto from "./assets/punto.svg";
import flecha_i from ".../assets/Icons/clip_l.svg";
import flecha_d from ".../assets/Icons/clip_r.svg";

function Usuario(titulo, texto, texto_rc, numero, btn_g, btn_pp) {
  return (
    <>
      <section className="titulo">Información de tu tienda</section>
      <div className="subir-foto">
        <img src={ico_foto} alt="" />
        <p>Foto tienda</p>
      </div>
      <section className="Nombre">Nombre</section>
      <p>escoge un nombre adecuado para tu tienda</p>
      <div className="Descripcion">Descripción</div>

      <section>
        <p>Métodos de pago</p>
        <div className="mdp">
          <img src="punto" alt="" />
        </div>
      </section>

      <section>CONTACTO</section>

      <section>Catálogo de productos publicados</section>
      <div className="catalogo">
        <img src="{flecha-i}" alt="" />
      </div>
    </>
  );
}
