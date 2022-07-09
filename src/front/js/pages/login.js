import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    alert(email);
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group row p-3 justify-content-center">
          <div class="col-10 col-sm-5">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
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
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row p-3 justify-content-center">
          <div className="col-10 col-sm-5">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
