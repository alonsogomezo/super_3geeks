import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/logo-3geeks.png";
import Mapa from "../../img/mapa.png";

const Perfil = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    let accessToken = localStorage.getItem("accessToken");
    let id = localStorage.getItem("id");
    const resp = await fetch(process.env.BACKEND_URL + "/usuario", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": accessToken,
      },
    });
    const data = await resp.json();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="col-6">
            <div>
              <img
                src="data:image/jpeg;base64,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"
                className="rounded-circle"
                width={130}
                height={130}
                alt=""
              />
            </div>
            <div>
              <input type={"file"} />
            </div>
          </div>
          <div className="col-6 p-5">
            <h2 className="">Nombre: {store.user?.nombre}</h2>
            <p className="">Email: {store.user?.email}</p>
            <p className="">Telefono: {store.user?.telefono}</p>
            <p className="">Tarjeta de credito: {store.user?.nombre}</p>
          </div>
        </div>
        <div className="col-6">
          <img src={Mapa} width="500" />
        </div>
      </div>
    </div>
  );
};

export default Perfil;
