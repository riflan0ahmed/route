import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext, IAuth } from "../../context/Auth";

const AuthGuard = () => {
    let location = useLocation();

    const { auth } = useContext(AuthContext) as IAuth;

    if (!auth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default AuthGuard;
