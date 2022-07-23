import React from "react";
import { Link } from "react-router-dom";

const cardProducto = ({ img, name, price, priceDesc, descrip, id, marca }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            {name} {marca}
          </h5>
          <p className="card-text">
            {price} - {priceDesc}
          </p>
          <p>{descrip}</p>
          <button onClick={() => {}} className="btn btn-primary">
            agregaer al carrito
          </button>
          <Link to={`/producto/${id}`}>
            <button className="btn btn-success">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cardProducto;
