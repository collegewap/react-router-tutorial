import React from "react";
import { Routes, Link, Route, useParams } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="">Profile</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
        <li>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
          <Route path="order_details/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export const Profile = () => {
  return <h2>Profile</h2>;
};
export const Orders = () => {
  const orderIds = ["10001", "10002", "10003"];
  return (
    <>
      <h2>Orders</h2>
      <ul className="orders">
        {/* Loop through the orders array and display link to order details */}
        {orderIds.map((orderId) => {
          return (
            <li key={orderId}>
              <Link to={`/dashboard/order_details/${orderId}`}>
                View Order {orderId}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export const Quotes = () => {
  return <h2>Quotes</h2>;
};
export const OrderDetails = () => {
  const params = useParams();

  return <h2>Details of order {params.orderId}</h2>;
};

export default Dashboard;
