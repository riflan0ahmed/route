import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, IAuth } from "../../../context/Auth";
import { Button, TextField } from "@mui/material";
import classes from "./page.module.scss";

const Login = () => {
    const navigate = useNavigate();

    const { setAuth } = useContext(AuthContext) as IAuth;

    const [value, setValue] = useState("");

    const authenticate = () => {
        setAuth(value);
        navigate("/profile");
    };

    return (
        <div className={classes.login}>
            <div className={classes.left}></div>
            <div className={classes.right}>
                <div className={classes.content}>
                    <h2>Please login to continue</h2>
                    <TextField label="username" variant="filled" required onChange={(event) => setValue(event.target.value)} />
                    <Button color="primary" variant="contained" disabled={value === ""} onClick={authenticate}>
                        Authenticate
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
