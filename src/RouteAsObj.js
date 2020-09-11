import React from "react";
import { useRoutes, Outlet } from "react-router";
import { Link } from "react-router-dom";

const RouteAsObj = () => {
  let element = useRoutes([
    { path: "/", element: <Route1 /> },
    { path: "route2", element: <Route2 /> },
    {
      path: "route3",
      element: <Route3 />,
      children: [
        { path: "child1", element: <Child1 /> },
        { path: "child2", element: <Child2 /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div>
      <ul>
        <li>
          <Link to="">Route1</Link>
        </li>
        <li>
          <Link to="route2">Route2</Link>
        </li>
        <li>
          <Link to="route3">Route3</Link>
        </li>
      </ul>
      {element}
    </div>
  );
};

const Route1 = () => <h1>Route1</h1>;
const Route2 = () => <h1>Route2</h1>;
const Route3 = () => {
  return (
    <div>
      <h1>Route3</h1>
      <ul>
        <li>
          <Link to="child1">Child1</Link>
        </li>
        <li>
          <Link to="child2">Child2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
const Child1 = () => <h2>Child1</h2>;
const Child2 = () => <h2>Child2</h2>;
const NotFound = () => <h1>NotFound</h1>;

export default RouteAsObj;
