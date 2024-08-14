import React, { Fragment, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Loader } from "../components";
// import AuthGuard from "./AuthGuard";
import BaseRoutes from "./base";

interface RouteConfig {
  path: string;
  exact: boolean;
  component: React.ComponentType;
  useAuth: boolean;
}
const renderRoute = ({ component: Component, ...route }: RouteConfig) => {
  const { useAuth } = route;
  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Fragment>
          <Suspense fallback={<Loader />}>
            {/* {useAuth ? (
              <AuthGuard>
                <Component />
              </AuthGuard>
            ) : (
              <Component />
            )} */}
            <Component />
          </Suspense>
        </Fragment>
      }
    />
  );
};

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      {/* <Routes>{BaseRoutes.map((route) => renderRoute(route))}</Routes> */}
    </BrowserRouter>
  );
};
export default RoutesWrapper;
