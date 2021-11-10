import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const PrivateElement = ({ children }) => {
  let location = useLocation();
  return fakeAuth.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateElement;
