import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import CardProducto from "../component/cardProducto";

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.muestraProducto();
  }, []);
  console.log(store.productos);
  return (
    <div>
      <div>
        {store.productos.map((item, index) => {
          return (
            <CardProducto
              key={index}
              name={item.producto}
              img={item.foto}
              price={item.precio}
              descrip={item.descripcion}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
