import { useReadLocalStorage } from "usehooks-ts";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Profile = (props: { logout: () => void }) => {
  const { logout } = props;

  const userInfo = useReadLocalStorage("userInfo");

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 ">
      <h1 className="flex flex-row text-2xl font-bold text-gray-500 ">
        Hi <span className="pl-1 capitalize">{`${userInfo}`}</span>, you are
        loggedIn
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
