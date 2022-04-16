import { useReadLocalStorage } from "usehooks-ts";
import { Button } from "@mui/material";

const Profile = (props: { logout: () => void }) => {
  const { logout } = props;

  const userInfo = useReadLocalStorage("userInfo");

  return (
    <div className="flex flex-col justify-center items-center gap-6 h-screen ">
      <h1 className="flex flex-row font-bold text-2xl text-gray-500 ">
        Hi <span className="capitalize pl-1">{`${userInfo}`}</span>, you are
        loggedIn
      </h1>
      <Button color="primary" variant="contained" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Profile;
