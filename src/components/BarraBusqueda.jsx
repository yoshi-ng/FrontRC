import React, { useState } from "react";
import products from "./assets/all_product";

function BarraBusqueda() {
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="nav_busqueda">
      <h1>Resultado de la busqueda</h1>
      <input
        type="text"
        className="nav_busqueda_text"
        placeholder="Hola, ¿Qué comprarás hoy?"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul className="resultado_busqueda">
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default BarraBusqueda;
