import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import ProtectedRoutes from "../ProtectedRoutes";
import Admin from "../Pages/Admin";
function Routing() {
    return(
  <Router>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Admin" element={<ProtectedRoutes><Admin/></ProtectedRoutes>}/>
    </Routes>
  </Router>)
}

export default Routing;
