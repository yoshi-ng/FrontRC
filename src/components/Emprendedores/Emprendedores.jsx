import imagen1 from '../assets/General/imagen1.png';
import imagen2 from '../assets/General/imagen2.png';
import imagen3 from '../assets/General/imagen3.png';
import imagen4 from '../assets/General/imagen4.png';
import imagen5 from '../assets/General/imagen5.png';

function Emprendedores() {
    return(
        <div>
            <h2 style={{ textAlign: "center" }}>TIENDAS DE EMPRENDEDORES</h2>
            <div style={{ display: "flex", padding: "60px" }}>
                <div style={{ textAlign: "center", flex: 1, padding: 20 }}>
                    <img style={{ width: "100%" }} src={imagen1} alt="" />
                    <p style={{ marginBottom: "4px" }}>Plantas,</p>
                    <p>Suculentas</p>
                </div>
                <div style={{ textAlign: "center", flex: 1, padding: 20 }}>
                    <img style={{ width: "100%" }} src={imagen2} alt="" />
                    <p style={{ marginBottom: "4px" }}>Artesanía,</p>
                    <p>Madera</p>
                </div>
                <div style={{ textAlign: "center", flex: 1, padding: 20 }}>
                    <img style={{ width: "100%" }} src={imagen3} alt="" />
                    <p style={{ marginBottom: "4px" }}>Vestuario y</p>
                    <p>accesorios</p>
                </div>
                <div style={{ textAlign: "center", flex: 1, padding: 20 }}>
                    <img style={{ width: "100%" }} src={imagen4} alt="" />
                    <p style={{ marginBottom: "4px" }}>Vidriería y</p>
                    <p>porcelana</p>
                </div>
                <div style={{ textAlign: "center", flex: 1, padding: 20 }}>
                    <img style={{ width: "100%" }} src={imagen5} alt="" />
                    <p style={{ marginBottom: "4px" }}>Productos</p>
                    <p>Orgánicos</p>
                </div>
            </div>
        </div>
    )
}

export default Emprendedores;