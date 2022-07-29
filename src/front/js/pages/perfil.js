import React, { useContext, useEffect } from "react";
import Logo from "../../img/logo-3geeks.png";
import { Context } from "../store/appContext";

const Perfil = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.muestraPerfil();
  }, []);
  console.log(store.user);
  return (
    <div className="container mt-3 mb-3 d-flex justify-content-center">
      <div className="row col-6  card btn btn-outline mb-5 shadow p-3 mb-5 border-white ">
        <h5 className="card-title text-center">Perfil de Usuario</h5>
        <div className="card-header bg-white">
          <div>
            <img
              src="data:image/png;base64,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"
              className="rounded-circle  "
              width={150}
              height={150}
            />
          </div>
          <div>
            <input type={"file"} />
          </div>
        </div>
        <div className="card-body">
          <p>
            <i className="bx bxs-user"></i>
            
            {store.user?.nombre}
            {store.user?.apellido}
          </p>
          <p>
            <i className="bx bx-mail-send"></i> {store.user?.email}
          </p>
          <p> <i className="bx bxs-home"></i> {store.user?.direccion}</p>
          <p>
            <i className="bx bxs-phone"></i> {store.user?.telefono}
          </p>
        </div>
        <div className="bg-secondary">
          <img src={Logo} width={40} />
        </div>
        
      </div>
    </div>
  );
};

export default Perfil;
