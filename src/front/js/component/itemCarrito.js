import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const ItemCarrito = ({
  src = "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
  nombreProducto = "Producto",
  id = 0,
}) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="border border-dark d-flex justify-content-between">
      <div>
        <img src={src} width={40} height={40} />
      </div>
      <div>
        <p className="pt-2">{nombreProducto}</p>
      </div>
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => actions.borrarItemCarrito(id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default ItemCarrito;
