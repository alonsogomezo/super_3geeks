import React from "react";
import Logo from "../../img/logo-3geeks.png";
import promoVegetales1 from "../../img/promoVegetales1.png";
import promoRefrescos1 from "../../img/promoRefrescos1.png";
import promoAlimentos1 from "../../img/promoAlimentos1.png";

const Carrito = () => {
  return (
    <div>
      <div className=" text-center mt-3 mb-0  pl-5">
        <h1>Super3Geeks</h1>
        <p className="text-dark">@super3geeks.www</p>
      </div>
      <nav className="navbar navbar-danger bg-danger"></nav>

      <div
        className="alert alert-light d-flex border border-dark pt-3"
        role="alert"
      >
        <img src={promoVegetales1} width={80} />
        <div className="d-flex justify-content-between">
          <p>lo mismo que cardProducto</p>
        </div>
      </div>

      <div className="alert alert-light d-flex border border-dark" role="alert">
        <img src={promoAlimentos1} width={80} />
        <div className="d-flex justify-content-between">
          <p>lo mismo que cardProducto</p>
        </div>
      </div>

      <div
        className="alert alert-light d-flex border border-dark pt-3"
        role="alert"
      >
        <img src={promoVegetales1} width={80} />
        <div className="d-flex justify-content-between">
          <p>lo mismo que cardProducto</p>
        </div>
      </div>

      <div
        className="alert alert-light d-flex border border-dark "
        role="alert"
      >
        <img src={promoRefrescos1} width={80} />
        <div className="d-flex justify-content-between">
          <p>lo mismo que cardProducto</p>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
