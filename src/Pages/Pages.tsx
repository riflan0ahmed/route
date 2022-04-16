import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import Login from "./Unprotected/Login/Login";
import Dashboard from "./Protected/Dashboard/Dashboard";
import Profile from "./Protected/Profile/Profile";
import NotFound from "./Unprotected/NotFound/NotFound";
import AuthGuard from "./AuthGuard/AuthGuard";

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
      <Route
        path="/login"
        element={
          <Login
            authenticate={authenticate}
            value={value}
            setValue={setValue}
            setUser={setAuth}
          />
        }
      />

      {/* Authenticated Routes */}
      <Route
        path="/profile"
        element={
          <AuthGuard auth={auth}>
            <Profile logout={logout} />
          </AuthGuard>
        }
      />
      <Route
        path="/"
        element={
          <AuthGuard auth={auth}>
            <Dashboard />
          </AuthGuard>
        }
      />

      {/* Redirect Routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
