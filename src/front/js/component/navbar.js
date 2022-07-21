import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Logo from "../../img/logo-3geeks.png";

export const Navbar = () => {
  const { store } = useContext(Context);

  return (
    <nav className=" navbar navbar-light bg-white navbar-expand-sm ">
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
    </nav>
  );
};
