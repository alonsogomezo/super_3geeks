import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-3geeks.png";

export const Navbar = () => {
  const { store } = useContext(Context);
  const [ver, setVer] = useState(false);
  return (
    <nav className=" navbar navbar-light bg-white navbar-expand-sm mb-5">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <img src={Logo} width={40} />
          <span className="navbar-brand mb-0 h1 pl-5">Super3Geeks</span>
        </Link>
        <div className="ml-auto">
          {store?.user?.accessToken ? (
            <Link to="/perfil">
              <button className="btn btn-danger">Perfil</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-danger">Login</button>
            </Link>
          )}
        </div>
      </div>
      <div className="position-relative">
        <button
          type="button"
          onClick={() => setVer((prev) => !prev)}
          className="btn btn-secondary rounded-circle fa-thin fa-cart-shopping"
        >
          carrito button
        </button>
        {ver && (
          <div
            className="position-absolute bg-white border border-dark"
            style={{
              width: 200,
              top: 50,
              right: 25,
              height: 200,
            }}
          >
            <div>{/* item img buttonDelete */}</div>
            Carrito
            {/* buttonComprar */}
          </div>
        )}
      </div>
    </nav>
  );
};
