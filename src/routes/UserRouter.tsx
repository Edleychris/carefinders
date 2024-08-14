import { Fragment, lazy, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PrivatePaths, PublicPaths } from "./path";
import { AuthContext } from "../context";

const privateRoutes = [
  /* Add paths for authorized users */
  {
    path: "dashboard",
    element: lazy(() => import("../modules/Dashboard")),
  },
  {
    path: "/patients",
    element: lazy(() => import("../modules/Patients")),
  },
  {
    path: "/doctors",
    element: lazy(() => import("../modules/Doctors")),
  },
  {
    path: "/departments",
    element: lazy(() => import("../modules/Departments")),
  },
  {
    path: "/employees",
    element: lazy(() => import("../modules/Employees")),
  },
  {
    path: "/pharmacy",
    element: lazy(() => import("../modules/Pharmacy")),
  },
  {
    path: "/analytics",
    element: lazy(() => import("../modules/Analytics")),
  },
  {
    path: "/invoices",
    element: lazy(() => import("../modules/Invoices")),
  },
  {
    path: "/Reports",
    element: lazy(() => import("../modules/Reports")),
  },
  {
    path: "/settings",
    element: lazy(() => import("../modules/Settings")),
  },
  {
    path: "/help & support",
    element: lazy(() => import("../modules/Help")),
  },
];
function User() {
  const { user } = useContext(AuthContext);
  // if (!user) {
  //   return <Navigate to={`${PublicPaths.LOGIN}`} replace />;
  // }
  return (
    <Routes>
      {privateRoutes.map(({ path, element: Element }) => (
        <Fragment key={path}>
          <Route key={path} path={path} element={<Element />} />
        </Fragment>
      ))}
    </Routes>
  );
}

export default User;
