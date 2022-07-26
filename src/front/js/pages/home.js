import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import CardProducto from "../component/cardProducto";
import PromoAlimentos1 from "../../img/promoAlimentos1.png";
import PromoVegetales1 from "../../img/promoVegetales1.png";
import PromoRefrescos1 from "../../img/promoRefrescos1.png";

const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.muestraProducto();
  }, []);
  return (
    <div>
      <nav className="navbar navbar-warning">
        <form className="form-inline">
          <div className="input-group">
            <div className="input-group-prepend">
              <button className="input-group-text" type="submit">
                @
              </button>
            </div>
            <input
              type="search"
              className="form-control"
              placeholder="Que estas  buscando?"
              aria-label="search"
            />
          </div>
        </form>
      </nav>
      <hr />

      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={PromoVegetales1}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={PromoAlimentos1}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={PromoRefrescos1}
              alt="Third slide"
            />
          </div>
        </div>
      </div> */}
      {/* <div className="my-5">
        <div className="d-flex flex-row mt-5">
          {store.productos.map((item, index) => {
            return (
              <CardProducto
                key={index}
                name={item.producto}
                img={item.foto}
                price={item.precio}
                descrip={item.descripcion}
                id={item.id}
                isCarrito={false}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Home;
