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
  console.log(actions.tasaCambio("USD", "CRC", 2000));
  return (
    <div>
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active img-fluid">
              <img
                src="https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"
                className="d-block w-100"
                alt="..."
                height={400}
              />
            </div>
            <div className="carousel-item img-fluid">
              <img
                src="https://img.huffingtonpost.com/asset/5ef9ffab250000a502c28ec2.jpeg?ops=scalefit_720_noupscale"
                className="d-block w-100"
                alt="..."
                height={400}
              />
            </div>
            <div className="carousel-item img-fluid">
              <img
                src="https://www.herbazest.com/imgs/d/8/7/551784/pera.jpg"
                className="d-block w-100"
                alt="..."
                height={400}
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>aaaaaaa</h5>
                <p>aaaaaaa</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justified-content-around">
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
      </div>
      {/* <div className="my-5">
        <div className="d-flex flex-row mt-5">
          
        </div>
      </div> */}
    </div>
  );
};

export default Home;
