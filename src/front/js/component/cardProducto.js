import React, { useContext, useEffect, useState } from "react";
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
  const [usd, setUsd] = useState(0);
  const { store, actions } = useContext(Context);
  useEffect(() => {
    price && tasaCambio("USD", "CRC", price);
  }, [price]);

  const tasaCambio = async (to, from, amount) => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "1Dm4q662dwf0KUn131X9ubFNWcgVPU9C");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    const resp = await fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
      requestOptions
    );
    const data = await resp.json();
    setUsd(data.result);
  };
  console.log(usd);
  return (
    <div className="col-4 d-flex justify-content-center mt-3">
      <div className="card z-index-1" style={{ width: "18rem", "z-index": 2 }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            {name} {marca}
          </h5>
          <p className="card-text">
            UY {price} - USD {usd}
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
