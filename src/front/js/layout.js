import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Admin } from "./pages/admin";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import Login from "./pages/login";
import injectContext from "./store/appContext";
import { cardProducto } from "./component/cardProducto";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Registro from "./pages/registro";
import Perfil from "./pages/perfil";
import { Productos } from "./pages/productos";
import Home from "./pages/home";
import { Prod_carrito } from "./component/prod_carrito";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Admin />} path="/admin" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Login />} path="/login" />
            <Route element={<Registro />} path="/registro" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<Productos />} path="/producto/:theid" />
            <Route element={<Home />} path={"/"} />
            <Route element={<Home />} path={"/home"} />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
