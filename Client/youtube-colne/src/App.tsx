import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const path = window.location.pathname;

  return (
    <>
      {path === "/Login" || path == "/SignUp" ? null : (
        <div>
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
