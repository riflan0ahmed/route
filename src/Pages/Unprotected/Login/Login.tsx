import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

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
    navigate("/profile");
  };

  return (
    <div className="grid grid-cols-2 gap-8 ">
      <div className="w-full h-screen bg-blue-50"></div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col gap-4 w-96">
          <h2 className="text-3xl font-bold text-blue-500 ">
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
