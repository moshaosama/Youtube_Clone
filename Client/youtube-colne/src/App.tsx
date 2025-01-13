import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  const path = window.location.pathname;

  return (
    <>
      {path === "/Login" ? null : (
        <div>
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
