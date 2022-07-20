import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-3geeks.png";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-0">
 

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

        <button type="button" className="btn btn-secondary rounded-circle ">Secondary</button>
      </nav>

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div className="carousel-item active">
            <img
              height={200}
              classaName="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTG_maK1oK7T1pF_dTPNeNeoYpaWTIEnbPJg&usqp=CAU"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>..1.</h5>
              <p>...</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height={200}
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKRPlFqXEPtFeIkaEexRkj77bLIpN9ZMmIQ&usqp=CAU"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>.2..</h5>
              <p>...</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              height={200}
              className="d-block w-100"
              src="..."
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>3...</h5>
              <p>...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col-sm-4 ">
            <h3>nombre </h3>
            <p>Descripcion del producto</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcp1DCq1CA4svPvY40YJmOn_POXn3Za3ut2g&usqp=CAU"
              className=""
            />

            <a href="#" class="btn btn-danger rounded-circle ">
              añadir al carrito
            </a>
          </div>
          <div className="col-sm-4" width={200} height={300}>
            <h3>nombre</h3>
            <p>Descripcion delmproducto</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaGIWPc_K5FvUFlLIhWWbbe5UsBhnQrvuUg&usqp=CAU"
              className=""
            />
            <a href="#" class="btn btn-danger rounded-circle">
              añadir al carrito
            </a>
          </div>
          <div className="col-sm-4">
            <h3>nombre</h3>
            <p>descripcion del producto</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgxV2SX3o1WwNoeaaUcuIL6CVSLP9-JHCCw&usqp=CAU"
              className=""
            />
            <a href="#" className="btn btn-danger rounded-circle">
              añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
