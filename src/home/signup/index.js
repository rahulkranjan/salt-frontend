import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(`/dashboard`);
    }
  }, []);
  async function signup() {
    let item = { name, email, contact, password };
    console.warn(item);
    let result = await fetch("http://127.0.0.1:8000/apiV1/user/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).catch((err) => {
      console.log(err);
    });
    console.log(result);
    if (result.status === 201) {
      navigate(`/login`);
    }
    // else if (result.status === 302) {
    //   alert(result.error);
    // }
  }

  return (
    <div className="container ">
      <div className="row justify-content-center align-items-center th-height ">
        <div className="col-md-8">
          <div className="p-3">
            <h1 className="text-center">Signup</h1>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card ">
            <div className="card-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Contact</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="contactHelp"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={signup}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
