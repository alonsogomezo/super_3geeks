import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    actions.login(body);
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group row p-3 justify-content-center">
          <div className="col-10 col-sm-5">
            <label htmlFor="label123" className="col-sm-2 col-form-label">
              Email
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
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
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row p-3 justify-content-center">
          <div className="col-10 col-sm-5 text-center">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
          <div className="col-10 col-sm-5 text-center">
            <Link to="/registro">
              <button type="button" className="btn btn-primary">
                Registrarse
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
