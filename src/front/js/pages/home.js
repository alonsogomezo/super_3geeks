import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-3geeks.png";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center  mt-0">
      {" "}
      <div className="row">
	  <div className="alert alert-info bg-dark">
         
	  <div className="jumbotron mt-3">
        <h1 className="text-warning">
          Super 3 Geeks
          <img src={Logo} width={60} />
        </h1>
        <p className="text-danger">
          Resize this responsive page to see the effect!
        </p>
      </div>

       
      </div>
        <div className="col-6">
          <div className="col-6">
		
		  <h3>Categoria 2</h3>
            <p>CaracteristicasLorem ipsum dolor..</p>

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
          <div className="col-6 p-5">
            <h2 className="">Nombre</h2>
            <p className="">Precio $</p>
            <p className="">Descripcion</p>
            <p className="">cantidad</p>
          </div>
        </div>

		

        <div className="col-6 mt-5">
          <h2 className="">Nombre</h2>

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
              <button className="btn btn-danger" type="button">
                Cancel
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
              <button className="btn btn-danger" type="button">
                Cancel
              </button>
            </div>
          </div>
          <p className="">Descripcion</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Something clever.."
            />
            <div class="input-group-append">
              <button className="btn btn-success" type="button">
                OK
              </button>
              <button className="btn btn-danger" type="button">
                Cancel
              </button>
            </div>
          </div>
          <p className="">Tarjeta de credito</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Something clever.."
            />
            <div class="input-group-append">
              <button className="btn btn-success" type="button">
                OK
              </button>
              <button className="btn btn-danger" type="button">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
        <img height={200} className="container-fluid "
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKRPlFqXEPtFeIkaEexRkj77bLIpN9ZMmIQ&usqp=CAU"/>
          {/*
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTG_maK1oK7T1pF_dTPNeNeoYpaWTIEnbPJg&usqp=CAU"
        className=""
      />
  */}
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
