import TiendaId from "../../components/TiendaId/TiendaId";
import { useParams } from "react-router-dom";

function Productos() {
  const { id } = useParams();
  return (
    <div key={id}>
      <TiendaId id={id} />
    </div>
  );
}

export default Productos;
