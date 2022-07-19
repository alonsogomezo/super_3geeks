import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-3geeks.png";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const [producto, setProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");

  const { store, actions } = useContext(Context);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      producto: producto,
      descripcion: descripcion,
      categoria: Number(categoria),
      precio: parseFloat(precio),
    };
    actions.creaProducto(body);
  };

  useEffect(() => {
    store.productoAnadido && navigate("/");
  }, [store.productoAnadido]);

  return (
    <div className="text-center mt-0">
      <form onSubmit={onSubmit}>
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
            <input
              required
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Nombre"
            />

            <p className="">Precio</p>
            <input
              required
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Precio"
            />

            <p className="">Descripcion</p>
            <input
              required
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Descripcion"
            />

            <p className="">Categoria</p>
            <select
              onChange={(e) => setCategoria(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Elige la categoria</option>
              <option value="1">Bebidas</option>
              <option value="2">Frutas y verduras</option>
              <option value="3">Alimentos preparados</option>
            </select>
            <input
              required
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Categoria"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Subir Producto
        </button>
      </form>
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
