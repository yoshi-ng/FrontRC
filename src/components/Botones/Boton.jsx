import "./Boton.css";

function Boton({ text }) {
  return (
    <div className="btn">
      <button>{text}</button>
    </div>
  );
}

export default Boton;
