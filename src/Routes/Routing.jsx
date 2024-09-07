import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
function Routing() {
    return(
  <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register/>}/>
    </Routes>
  </Router>)
}

export default Routing;
