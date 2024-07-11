import { useParams } from "react-router-dom";
import Producto from "../../components/Producto/Producto";

function Productos() {
  const { id } = useParams();
  return (
    <div key={id}>
      <Producto id={id} />
    </div>
  );
}

export default Productos;
