import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import CheckOut from "./Components/CheckOut/CheckOut";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ForgetPassword from "./Components/Auth/ForgetPassword/ForgetPassword";
import RequiredAuth from "./Components/Auth/RequiredAuth/RequiredAuth";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<RequiredAuth>
          <CheckOut />
        </RequiredAuth>} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
