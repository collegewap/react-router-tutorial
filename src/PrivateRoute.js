import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const PrivateElement = ({ element }) => {
  let location = useLocation();
  return fakeAuth.isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

function PrivateRoute({ element, ...rest }) {
  return <Route {...rest} element={<PrivateElement element={element} />} />;
}

export default PrivateRoute;
