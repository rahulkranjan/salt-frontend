import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/`);
    }
  }, [navigate]);

  async function login() {
    let item = { contact, password };
    let result = await fetch(
      "https://web-production-df525.up.railway.app/token/",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    var data = await result.json();

    if (result.status === 200) {
      var token = data.access;
      localStorage.setItem("token", token);
      let resultNew = await fetch(
        "https://web-production-df525.up.railway.app/apiV1/current-user/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `JWT ${token}`,
          },
        }
      );
      if (resultNew.status === 200) {
        var userData = await resultNew.json();
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate(`/dashboard`);
      }
    }
  }
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
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="contactHelp"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="py-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={login}
                >
                  Submit
                </button>
              </div>

              <small id="" className="form-text text-muted">
                Contact: 9638527410 and Password: admin
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
