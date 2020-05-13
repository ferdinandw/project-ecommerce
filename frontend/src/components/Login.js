import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div className="container-fluid">
        <div className="row test">
          <div className="col-md-6">
            <img src={require("./img/bri.png")} alt="Gambar 1" />
          </div>
          <div className="col-md-6">
            <form className="mb-4">
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" />
                <small class="form-text">
                  forgot password ?<Link to="/recovery"> Click Here</Link>
                </small>
              </div>
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </form>
            <h6>
              Don't Have an Account ?
              <Link to="/register"> Sign Up For Free</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
