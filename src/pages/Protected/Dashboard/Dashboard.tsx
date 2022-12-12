import { Link } from "react-router-dom";
import classes from "./page.module.scss";

const Dashboard = () => {
    return (
        <div className={classes.dashboard}>
            <h1>Dashboard Page</h1>
            <Link to={"/profile"}>Go to Profile</Link>
        </div>
    );
};

export default Dashboard;
