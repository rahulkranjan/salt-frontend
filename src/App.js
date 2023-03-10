import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./home/login";
import Signup from "./home/signup";
import Main from "./home";
import Dashboard from "./home/final";
import BucketList from "./home/diary";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/d" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<BucketList />} />
      </Routes>
    </div>
  );
}

export default App;
