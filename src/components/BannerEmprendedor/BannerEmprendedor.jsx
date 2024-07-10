import "./BannerEmprendedor.css";

function BannerEmprendedor({ tittle, text, close, background }) {
  return (
    <div className="contenedor_banner">
      <img src={background} alt="Background banner" />
      <div className="contenido">
        {tittle} <br />
        {text} <br />
        {close}
      </div>
    </div>
  );
}

export default BannerEmprendedor;
