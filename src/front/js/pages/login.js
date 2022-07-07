import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group row p-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group row p-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group row p-3">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
