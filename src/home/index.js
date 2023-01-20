import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  state = {};
  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div>
          <div className="">
            <h2 className="text-center">Please choose any one option.</h2>
          </div>
          <div className="d-flex justify-content-center">
            <div className="p-5">
              <Link to="/login">
                <button type="button" className="btn btn-primary px-4">
                  Login
                </button>
              </Link>
            </div>
            <div className="p-5">
              <Link to="/signup">
                <button type="button" className="btn btn-primary px-4">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
