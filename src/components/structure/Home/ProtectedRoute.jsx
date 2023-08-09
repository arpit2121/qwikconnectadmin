import React from "react";
import { Route, redirect } from "react-router-dom";

const isLoggedIn = true;

const ProtectedRoute = ({ children, ...rest }) => {
  const isLoggedIn = false;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isLoggedIn) {
          return redirect("/login");
        }
        return children;
      }}
    />
  );
};
export default ProtectedRoute;
