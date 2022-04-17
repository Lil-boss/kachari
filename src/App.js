import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
