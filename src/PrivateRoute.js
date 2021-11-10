import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const PrivateElement = ({ component: Component, ...props }) => {
  let location = useLocation();
  return fakeAuth.isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

function PrivateRoute({ component, ...rest }) {
  return <Route element={<PrivateElement component={component} {...rest} />} />;
}

export default PrivateRoute;
