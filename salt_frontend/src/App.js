import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./home/login";
import Signup from "./home/signup";
import Main from "./home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
