import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const User = JSON.parse(sessionStorage.getItem("User"));
    if (User && User.admin) {
        return children
    } else {
        return <Navigate to="/" />;
    }
}

export default ProtectedRoutes