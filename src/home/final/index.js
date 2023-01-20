import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/apiV1/user/")
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        {data.map((item) => (
          <h2 className="text-center">
            Hi my name is {item.name}. I'm logged in.
            <br /> Want to connect?
            <br />
            <small style={{ fontSize: "18px", color: "#bfbfc0" }}>
              Contact: {item.contact} and Email: {item.email}
            </small>
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
