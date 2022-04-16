import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import Login from "./Unprotected/Login/Login";
import Dashboard from "./Protected/Dashboard/Dashboard";
import Profile from "./Protected/Profile/Profile";

const Pages = () => {
  const [value, setValue] = useState("");
  const [auth, setAuth] = useLocalStorage("userInfo", value);

  const authenticate = () => {
    setAuth(value);
  };

  const logout = () => {
    setValue("");
    setAuth("");
  };

  return (
    <Routes>
      {/* Unauthenticated Routes */}
      {!auth && (
        <Route
          path="/auth"
          element={
            <Login
              authenticate={authenticate}
              value={value}
              setValue={setValue}
              setUser={setAuth}
            />
          }
        />
      )}

      {/* Authenticated Routes */}
      {auth && (
        <>
          <Route path="/profile" element={<Profile logout={logout} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      )}

      {/* Redirect Routes */}
      <Route path="*" element={<Navigate to={auth ? "/profile" : "/auth"} />} />
    </Routes>
  );
};

export default Pages;
