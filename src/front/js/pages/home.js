import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-0">

		
     
        <img height={200} className="container-fluid "
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKRPlFqXEPtFeIkaEexRkj77bLIpN9ZMmIQ&usqp=CAU"/>
          {/*
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTG_maK1oK7T1pF_dTPNeNeoYpaWTIEnbPJg&usqp=CAU"
        className=""
      />
  */}

 

      <div className="jumbotron mt-3">
        <h1 className="text-warning">Bienvenidos</h1>
        <p className="text-danger">Resize this responsive page to see the effect!</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>Categoria 1</h3>
            <p>Lorem ipsum dolor..</p>
			<img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcp1DCq1CA4svPvY40YJmOn_POXn3Za3ut2g&usqp=CAU"
        className=""
      />
          </div>
          <div className="col-sm-4">
            <h3>Categoria 2</h3>
            <p>CaracteristicasLorem ipsum dolor..</p>
			<img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaGIWPc_K5FvUFlLIhWWbbe5UsBhnQrvuUg&usqp=CAU"
        className=""
      />
          </div>
          <div className="col-sm-4">
            <h3>Categoria 3</h3>
            <p>Lorem ipsum dolor..</p>
			<img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgxV2SX3o1WwNoeaaUcuIL6CVSLP9-JHCCw&usqp=CAU"
        className=""
      />
          </div>
        </div>
      </div>

   

      <img src="paris.jpg" className="float-right" />
	  <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
      <div className="alert alert-info bg-dark">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
	

    
    </div>
  );
};
