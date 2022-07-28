import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/logo-3geeks.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    actions.login(body);
  };
  useEffect(() => {
    store.user.accessToken && navigate("/home");
  }, [store.user]);
  return (
    <div className="container mt-5 bg-secondary mt-3 mb-3 text-white rounded border border-danger">

<div className=" text-center mt-3 mb-0  pl-5">
        <h1>Super3Geeks</h1>
        <p className="text-dark">@super3geeks.www</p>
      </div>

      <h2 className="text-center bg-danger mt-3 border border-dark text-white rounded">
        {" "}
        <img src={Logo} width={40} />
      </h2>
      <hr />
  

      <form onSubmit={onSubmit}>
        <div className="form-group mt-5 row p-3 justify-content-center  ">
          <div className="col-10 col-sm-5 ">
            <label htmlFor="label123" className="col-sm-2 col-form-label ">
              Email
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control border border-danger"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group row p-3 justify-content-center">
          <div className="col-10 col-sm-5">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control border border-danger"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row p-3 d-flex justify-content-center">
          <div className="col-10 col-sm-2 text-center">
            <button type="submit" className="btn btn-danger px-5">
              Log In
            </button>
          </div>
        </div>
        <hr />
        <div className="form-group row p-3 d-flex justify-content-center bg-danger rounded">
          <div className="col-10 col-sm-5 text-center  ">
            <Link to="/registro">¿No tienes cuenta aún?</Link>
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default Login;
