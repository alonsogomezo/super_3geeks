import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-3geeks.png";
import { useNavigate } from "react-router-dom";

import "../../styles/productos.css";
import CardProducto from "../component/cardProducto";

export const Productos = () => {
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
          <hr/>
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
              Haga click sobre el boton "Elige Categoria" Seleccione la opcion
              que corresponda y luego ingrese los datos requeridos en los campos
            </p>
          
            <h5 className="card-title">Descripcion</h5>

            <p className="card-text">
            Descripcion del producto
            </p>

          

          </div>
          
        </div>
      </form>
    </div>
  );
};

export default Productos;
