import { useContext } from "react";
import { AuthContext, IAuth } from "../../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Profile = () => {
    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext) as IAuth;

    const logout = () => {
        setAuth("");
        navigate("/login");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6 ">
            <h1 className="flex flex-row text-2xl font-bold text-gray-500 ">
                Hi <span className="pl-1 capitalize">{`${auth}`}</span>, you are loggedIn
            </h1>
            <Link to={"/"} className="text-blue-600 underline ">
                Go to Dashboard
            </Link>
            <Button color="primary" variant="contained" onClick={logout}>
                Logout
            </Button>
        </div>
    );
};

export default Profile;
