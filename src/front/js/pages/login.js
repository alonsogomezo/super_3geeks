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
    <div className="text-white bg-white mb-5  shadow p-3 mb-5 rounded">
      <div className=" text-center">
        <h1 className="text-dark">Super3Geeks</h1>
      </div>

      <h2 className="text-center bg-secondary mt-3 border border-dark text-white rounded">
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
              className="form-control border border-secondary"
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
              className="form-control border border-secondary"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row p-3 d-flex justify-content-center">
          <div className="col-10 col-sm-2 text-center">
            <button type="submit" className="btn btn-outline-danger mb-5 shadow p-3 mb-5 border-white">
              Log In
            </button>
          </div>
        </div>
        <p className="text-dark text-center">@super3geeks.www</p>
        <hr />
        <div className="form-group row p-3 d-flex justify-content-center bg-dark rounded">
          <div className="col-10 col-sm-5 text-center color-white ">
            <Link to="/registro">¿No tienes cuenta aún?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
