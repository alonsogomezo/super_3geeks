import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../img/logo-3geeks.png";
import { Context } from "../store/appContext";

import "../../styles/productos.css";

export const Productos = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    alert(params?.theid);
  }, [params?.theid]);

  return (
    <div className="text-center mt-0">
      <div className="row">
        <nav className="navbar navbar-warning bg-danger ">
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

          <button
            type="button"
            className="btn btn-secondary rounded-circle fa-thin fa-cart-shopping"
          >
            carrito button
          </button>
        </nav>
        <hr />
        <div className="col-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaGIWPc_K5FvUFlLIhWWbbe5UsBhnQrvuUg&usqp=CAU"
            className="container-fluid"
          />
        </div>
        <div className="col-6 mt-5">
          <div className="jumbotron mt-3">
            <h1 className="text-dark">
              Nombre del Producto
              <img src={Logo} width={60} />
            </h1>
          </div>
          <h5 className="card-title">Datos del Producto</h5>
          <p className="card-text">
            Haga click sobre el boton "Elige Categoria" Seleccione la opcion que
            corresponda y luego ingrese los datos requeridos en los campos
          </p>

          <h5 className="card-title">Descripcion</h5>

          <p className="card-text">Descripcion del producto</p>
        </div>
      </div>
    </div>
  );
};

export default Productos;
