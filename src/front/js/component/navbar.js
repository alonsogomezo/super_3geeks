import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-3geeks.png";
import ItemCarrito from "./itemCarrito";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [ver, setVer] = useState(false);
  /* useEffect(() => {
    store?.user?.accessToken && actions.getCarrito();
  }, [store?.user?.accessToken]); */
  console.log(store.itemsCarrito);
  return (
    <nav className=" navbar navbar-light bg-white navbar-expand-sm mb-5">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <img src={Logo} width={40} />
          <span className="navbar-brand mb-0 h1 pl-5">Super3Geeks</span>
        </Link>
        <div>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Que estas buscando?"
              aria-label="search"
            />
            <div className="input-group-prepend">
              <button className="input-group-text" type="submit">
                🔍
              </button>
            </div>
          </div>
        </div>
        <div className="ml-auto d-flex col-2 justify-content-around">
          <div className="pr-5">
            <div className="position-relative">
              <button
                type="button"
                onClick={() => setVer((prev) => !prev)}
                className="btn btn-outline-danger position-relative"
              >
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                  {store?.itemsCarrito?.length}
                </span>
                🛒
              </button>
              {ver && (
                <div
                  className="position-absolute bg-white border border-dark overflow-auto"
                  style={{
                    width: 200,
                    top: 50,
                    right: 25,
                    height: 200,
                    zIndex: 10,
                  }}
                >
                  Carrito
                  {store?.itemsCarrito?.map((item, index) => {
                    return <ItemCarrito key={index} />;
                  })}
                  <div className="">
                    <button className="btn btn-outline-dark">Comprar</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            {store?.user?.accessToken ? (
              <div>
                <Link to="/perfil">
                  <button className="btn btn-danger">Perfil</button>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-danger">Login</button>
              </Link>
            )}
          </div>
          {store?.user?.accessToken && (
            <Link to="/admin">
              <button className="btn btn-outline-success">
                Subir productos
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
