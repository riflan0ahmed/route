import { useContext } from "react";
import { AuthContext, IAuth } from "../../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import classes from "./page.module.scss";

const Profile = () => {
    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext) as IAuth;

    const logout = () => {
        setAuth("");
        navigate("/login");
    };

    return (
        <div className={classes.profile}>
            <h1>
                Hi <span>{`${auth}`}</span>, you are loggedIn
            </h1>
            <Link to={"/"}>Go to Dashboard</Link>
            <Button color="primary" variant="contained" onClick={logout}>
                Logout
            </Button>
        </div>
    );
};

export default Profile;
