import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../Pages/Home";
function Routing() {
    return(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  </Router>)
}

export default Routing;
