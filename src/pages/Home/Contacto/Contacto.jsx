import fondo from '../../../components/assets/General/fondo.png';
import sobre from '../../../components/assets/General/sobre.png';
import wsp from '../../../components/assets/General/wspp.png';
import face from '../../../components/assets/General/face.png';
import ig from '../../../components/assets/General/ig.png';
import "./Contacto.css";

function Contacto() {
  return ( 
    <div style={{ height: "80vh", backgroundImage: `url("${fondo}")`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
      <div style={{ display: "flex" }}>
        <div style={{ padding: 40, flex: 1 }}>
          <h1 style={{ color: "#fff", fontSize: "45px", marginBottom: "24px" }}>Nuestro contacto</h1>
          <div style={{ marginBottom: "24px" }}>
            <p style={{ color: "#fff", fontSize: "24px", marginBottom: "20px" }}>¿Tienes preguntas o necesitas más información?</p>
            <p style={{ color: "#fff", fontSize: "24px" }}>Escríbenos a nuestro whatsapp y con gusto te ayudamos</p>
          </div>
          <div>
            <div style={{ display: "flex", marginBottom: "6px" }}>
              <img width={30} style={{ marginRight: "10px" }} src={wsp} alt="" />
              <p style={{ color: "#fff", fontSize: "20px" }}>+56967642369</p>
            </div>
            <div style={{ display: "flex" }}>
              <img width={30} style={{ marginRight: "10px" }} src={sobre} alt="" />
              <p style={{ color: "#fff", fontSize: "20px" }}>r.creativo@gmail.com</p>
            </div>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <p style={{ color: "#fff", fontSize: "20px", marginBottom: "20px" }}>Redes sociales</p>
            <div style={{ display: "flex" }}>
              <img width={40} style={{ borderRadius: "100%", marginRight: "16px" }} src={face} alt="" />
              <img width={40} src={ig} alt="" />
            </div>
          </div>
        </div>
        <div style={{ padding: 40, flex: 1, paddingTop: 60 }}>
          <input className="placeholderBlanco" type="text" style={{ width: "100%", marginBottom: "20px",height: "40px", backgroundColor: "#ffffff84" }} placeholder='Nombre Apellido' />
          <input className="placeholderBlanco" type="text" style={{ width: "100%", marginBottom: "20px",height: "40px", backgroundColor: "#ffffff84" }} placeholder='Correo Electrónico' />
          <input className="placeholderBlanco" type="text" style={{ width: "100%", marginBottom: "20px",height: "40px", backgroundColor: "#ffffff84" }} placeholder='Asunto' />
          <textarea className="placeholderBlanco" name="" id="" style={{ width: "100%", height: "100px",backgroundColor: "#ffffff84", paddingTop: "10px",marginBottom: "20px" }} placeholder='Escribe tu mensaje'></textarea>
          <button style={{ backgroundColor: "#fa8f21", border: "#fa8f21",  width: "100%", color: "#fff", height: "40px" }}>Enviar un mensaje</button>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
