import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  /* useEffect(() => {
    !store.user.name && navigate("/login");
  }, [store.user]); */
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 bg-dark">
          <div className="col-6">
            <div>
              <img />
            </div>
            <div>
              <input type={"file"} />
            </div>
          </div>
          <div className="col-6">
            <p className="text-white">hola</p>
            <p className="text-white">hola</p>
            <p className="text-white">hola</p>
            <p className="text-white">hola</p>
            <p className="text-white">hola</p>
          </div>
        </div>
        <div className="col-6 bg-warning">{/* mapa */}</div>
      </div>
    </div>
  );
};

export default Perfil;
