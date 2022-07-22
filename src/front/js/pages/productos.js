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
          <div class="alert alert-danger" role="alert">
            This is a primary alert—check it out!
          </div>
          <div className="col-6">                      
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaGIWPc_K5FvUFlLIhWWbbe5UsBhnQrvuUg&usqp=CAU"
                    className="container-fluid"
                   
                  />
           
          </div>
          <div className="col-6 mt-5">
            <div className="jumbotron mt-3">
              <h1 className="text-dark">
                Super 3 Geeks
                <img src={Logo} width={60} />
              </h1>
            </div>
            <h5 className="card-title">Datos del Producto</h5>
            <p className="card-text">
              Haga click sobre el boton "Elige Categoria" Seleccione la opcion
              que corresponda y luego ingrese los datos requeridos en los campos
            </p>
          
            <h5 className="card-title">Envio de Datos</h5>

            <p className="card-text">
              Recuerda que si alguno de los campos carece de informacion no sera
              posible realizar dicha accion
            </p>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Productos;
