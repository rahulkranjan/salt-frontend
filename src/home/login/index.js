import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container ">
      <div className="row justify-content-center align-items-center th-height ">
        <div className="col-md-8 ">
          <div className="p-3 ">
            <h1 className="text-center">Login</h1>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card ">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="contactHelp"
                  />
                  <small id="contactHelp" className="form-text text-muted">
                    We'll never share your contact with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    //   value={password}
                    //   onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="py-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>

                <small id="" className="form-text text-muted">
                  Contact: 9638527410 and Password: admin
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
