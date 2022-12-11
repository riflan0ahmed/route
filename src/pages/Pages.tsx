import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import loadable from "./Loadable/Loadable";
import AuthGuard from "./AuthGuard/AuthGuard";

const Login = loadable(lazy(() => import("./Unprotected/Login/Login")));
const Dashboard = loadable(lazy(() => import("./Protected/Dashboard/Dashboard")));
const Profile = loadable(lazy(() => import("./Protected/Profile/Profile")));
const NotFound = loadable(lazy(() => import("./Unprotected/NotFound/NotFound")));

const Pages = () => {
    return (
        <Routes>
            {/* Unauthenticated Routes */}
            <Route path="/login" element={<Login />} />

            {/* Authenticated Routes */}
            <Route path="/" element={<AuthGuard />}>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
            </Route>

            {/* Redirect Routes */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Pages;
