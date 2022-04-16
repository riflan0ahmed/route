import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props: {
  authenticate: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<string>>;
}) => {
  const { authenticate, value, setValue, setUser } = props;

  const navigate = useNavigate();

  const onClick = () => {
    authenticate();
    setUser(value);
    navigate("profile");
  };

  return (
    <div className=" grid grid-cols-2 gap-8">
      <div className="w-full h-screen bg-blue-50"></div>
      <div className=" flex justify-center items-center">
        <div className="w-96 flex flex-col gap-4">
          <h2 className=" font-bold text-3xl text-blue-500">
            Please login to continue
          </h2>
          <TextField
            label="username"
            variant="filled"
            required
            onChange={(event) => setValue(event.target.value)}
          />
          <Button
            color="primary"
            variant="contained"
            disabled={value === ""}
            onClick={onClick}
          >
            Authenticate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
