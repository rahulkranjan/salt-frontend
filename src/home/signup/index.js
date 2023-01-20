import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <div className="container ">
        <div
          className="row justify-content-center align-items-center th-height "
        >
          <div className="col-md-8">
            <div className="p-3">
              <h1 className="text-center">Signup</h1>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="card ">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" />
                    <label>Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="contactHelp"
                    />
                  </div>
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
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
                  <button type="submit" className="btn btn-primary">
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
