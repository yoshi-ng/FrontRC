import { useState, useEffect } from "react";
import axios from "axios";
//punto end, es donde colocaremos todas las claves y rutas del servidor para que se configure de forma global.
//Por el momento vamos a emular esta ruta global

import Cards from "../../../components/Cards/Cards";

const client = axios.create({
  baseURL: "http://localhost:8080/api/producto/lista",
});

function Tienda() {
  const [productos, setProductos] = useState(null);
  //Hay diferencia si se obtiene un objeto o un array, se escribe de forma distinta
  //Con axios, siempre dentro del useEffect iran los post y los get, sino, el rendimiento de la app sera desastrozo ya que cada vez que haga algo en mi app, se cargara esta funcion, en cambio en useEffect se evita ese problema
  // {aqui va mi codigo cuando inicie el useEffect}
  // [mi codigo puede depende de algo, de alguna otra funcion o clase, si no depende de nada quedara vacio]
  useEffect(() => {
    client.get().then((response) => {
      setProductos(response.data);
    });
  }, []);
  return (
    <>
      <Cards data={productos} titulo="Productos" />
    </>
  );
}

export default Tienda;
