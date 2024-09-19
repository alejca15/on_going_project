import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import ProtectedRoutes from "../ProtectedRoutes";
import Admin_page from "../Pages/Admin";
import ContactUs from "../Pages/ContactUs";

function Routing() {
    return(
  <Router>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
      <Route path="/Admin" element={<ProtectedRoutes><Admin_page/></ProtectedRoutes>}/>
    </Routes>
  </Router>)
}

export default Routing;
