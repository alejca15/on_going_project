import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const User = JSON.parse(sessionStorage.getItem("User"));
    if (User && User.admin) {
        Navigate("/Admin");
    } else return children
}

export default ProtectedRoutes