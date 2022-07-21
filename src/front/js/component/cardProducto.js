import React from "react";

const cardProducto = () => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://www.cuerpomente.com/medio/2022/03/14/caracteristicas-jabon-natural_52625327_1200x1200.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Nombre Producto</h5>
          <p className="card-text">Precio de Producto - Precio con Desc.</p>
          <p>DESCRIPCCION</p>
          <button onClick={() => {}} className="btn btn-primary">
            agregaer al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default cardProducto;
