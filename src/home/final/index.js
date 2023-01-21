import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState({
    contact: "",
    email: "",
    name: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      var userData = JSON.parse(localStorage.getItem("userData"));
      console.log(userData);
      setData(userData);
    } else {
      navigate(`/login`);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate(`/login`);
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <h2 className="text-center">
            Hi my name is {data.name}. I'm logged in.
            <br /> Want to connect?
            <br />
            <small style={{ fontSize: "18px", color: "#bfbfc0" }}>
              Contact: {data.contact} and Email: {data.email}
            </small>
          </h2>
          <button className="btn btn-primary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
