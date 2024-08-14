// import { Navigate, useLocation } from "react-router-dom";

// import { PublicPaths } from "./path";
// import { isAuthenticated } from "../utils";
import { ChildProps } from "../interface";

const AuthGuard = ({ children }: ChildProps) => {
  // const location = useLocation();

  // if (isAuthenticated()) {
  //   return <>{children}</>;
  // }
  // return <Navigate to={PublicPaths.LOGIN} state={{ from: location }} replace />;
  return <>{children}</>;
};

export default AuthGuard;
