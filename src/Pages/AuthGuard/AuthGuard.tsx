import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = (props: { children: any; auth: string }) => {
  const { children, auth } = props;
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthGuard;
