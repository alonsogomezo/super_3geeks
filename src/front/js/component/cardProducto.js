import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const cardProducto = ({
  img,
  name,
  price,
  priceDesc,
  descrip,
  id,
  marca,
  isCarrito,
}) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="col-4 d-flex justify-content-center mt-3">
      <div className="card z-index-1" style={{ width: "18rem", "z-index": 2 }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            {name} {marca}
          </h5>
          <p className="card-text">
            {price} - {priceDesc}
          </p>
          <p>{descrip}</p>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => {
                actions.addCarrito(id, 1);
              }}
            >
              ⭐
            </button>
            <Link to={`/producto/${id}`}>
              <button className="btn btn-success">Ver más</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardProducto;
