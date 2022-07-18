import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-3geeks.png";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions
      .muestraProducto()
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="text-center  mt-0">
      {" "}
      <div className="row">
        <div className="alert alert-info bg-warning">
          <div className="jumbotron mt-3">
            <nav className="navbar navbar-expand-sm bg-warning justify-content-center">
              <ul className="navbar-nav">
                <li class="nav-item">
                  <a className="nav-link" href="#">
                    Categoria 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Categoria 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Categoria 3
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Categoria 4
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-6">
          <h3>Nombre{store.producto?.producto} </h3>
		  <h6>{store.producto?.descripcion} </h6>
          <p>Descripcion{store.producto?.descripcion} </p>

          <div className="col-6">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaGIWPc_K5FvUFlLIhWWbbe5UsBhnQrvuUg&usqp=CAU"
                className=""
                width={430}
              />

            </div>
            <div>
              <input type={"file"} />
            </div>

            
          </div>
        </div>

        <div className="col-6 mt-5">
          <p className="">Nombre de Producto</p>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="nombre.."
            />
            <div class="input-group-append">
              <button className="btn btn-success" type="button">
                OK
              </button>
            </div>
          </div>

          <p className="">Precio Original</p>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="$.." />
            <div class="input-group-append">
              <button className="btn btn-success" type="button">
                OK
              </button>
            </div>
          </div>
          <p className="">Precio</p>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="$.." />
            <div class="input-group-append">
              <button className="btn btn-success" type="button">
                OK
              </button>
            </div>
          </div>
          <p className="">Descripcion</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="descripcion.."
            />
            <div class="input-group-append">
              <button className="btn btn-success" type="button">
                OK
              </button>
            </div>
            
          </div>
          <p className="">SKU</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="descripcion.."
            />
            <div class="input-group-append">
              <button className="btn btn-success" type="button">
                OK
              </button>
            </div>
            
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-block">Subir Producto</button>
      <div className="jumbotron mt-3">
        <h1 className="text-warning">
          Super 3 Geeks
          <img src={Logo} width={60} />
        </h1>
        <p className="text-danger">
          Resize this responsive page to see the effect!
        </p>
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
    </div>
  );
};
