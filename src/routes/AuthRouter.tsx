import { lazy, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
// import { useAuthenticatedUser } from "../context/hooks";
// import { UserRoles } from "../utils/constants";
import { PrivatePaths } from "./path";

const paths = [
  {
    path: "/",
    element: lazy(() => import("../modules/Auth/Login")),
  },

  {
    path: "/create-account",
    element: lazy(() => import("../modules/Auth/Register")),
  },
  {
    path: "/forgot-password",
    element: lazy(() => import("../modules/Auth/ForgotPassword")),
  },
];

function Auth() {
  const { user } = useContext(AuthContext);
  // if (user) {
  //   return <Navigate to={`${PrivatePaths.OVERVIEW}`} replace />;
  // }

  return (
    <Routes>
      {/* <Route path="" element={<Navigate to={PublicPaths.HOME} replace />} /> */}
      {paths.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  );
}

export default Auth;
