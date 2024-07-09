import Cards from "../../../components/Cards/Cards";
import products from "../../../components/assets/all_product";

function Tienda() {
  return (
    <>
      <div>Home Tienda Emprendedor</div>
      <Cards data={products} titulo="Productos" />
    </>
  );
}

export default Tienda;
