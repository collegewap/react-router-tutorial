import React from "react";
import { fakeAuth } from "./fakeAuth";
import { useNavigate } from "react-router-dom";

const ProtectedPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>You are logged in. Welcome to protected page!</p>
      <button
        onClick={() => {
          fakeAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/protected" } } })
          );
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default ProtectedPage;
