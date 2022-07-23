import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/logo-3geeks.png";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Admin = () => {
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
    alert("Producto anadido exitosamente");
    setDescripcion("");
    setProducto("");
    setPrecio("");
  };

  useEffect(() => {
    actions
      .muestraProducto()
      .then((resp) => {
        console.log(resp);
        alert("");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="text-center mt-0">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="card text-center bg-secondary" width={200}>
              <div className="card-header text-center bg-dark text-white">
                <p>Imagen del Producto</p>
              </div>
              <div className="card-body">
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
                <h5 className="card-title">Nombre</h5>
                <p className="card-text">precio</p>
                <p className="card-text">descripcion</p>
                <button
                  type="submit"
                  className="btn btn-danger btn-lg btn-block"
                >
                  Subir Producto
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 mt-5">
            <h5 className="card-title">Datos del Producto</h5>
            <p className="card-text">
              Haga click sobre el boton "Elige Categoria" Seleccione la opcion
              que corresponda y luego ingrese los datos requeridos en los campos
            </p>
            <div>
              <select
                onChange={(e) => setCategoria(e.target.value)}
                className="form-select text-center bg-secondary"
                aria-label="Default select example"
              >
                <option selected>Elige la categoria</option>
                <option value="1">Bebidas</option>
                <option value="2">Frutas y verduras</option>
                <option value="3">Alimentos preparados</option>
              </select>
            </div>

            <input
              required
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Nombre del Producto"
            />

            <input
              required
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Precio"
            />

            <input
              required
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Descripcion"
            />

            <input
              required
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              type="text"
              className="form-control text-center bg-dark text-white"
              id="inputName"
              placeholder="Categoria"
            />

            <h5 className="card-title">Envio de Datos</h5>
            <p className="card-text">
              Recuerda que si alguno de los campos carece de informacion no sera
              posible realizar dicha accion
            </p>
            <div className="jumbotron mt-3">
              <h1 className="text-dark">
                Super 3 Geeks
                <img src={Logo} width={60} />
              </h1>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
