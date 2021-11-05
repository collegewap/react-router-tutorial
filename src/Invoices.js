import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export const Invoices = () => {
  const invoiceIds = ["50001", "50002", "50003"];
  return (
    <>
      <h2>Invoices</h2>
      <ul className="invoices">
        {invoiceIds.map((invoiceId) => {
          return (
            <li key={invoiceId}>
              <Link to={`/invoices/${invoiceId}`}>
                View Invoice {invoiceId}
              </Link>
            </li>
          );
        })}
        <Outlet />
      </ul>
    </>
  );
};

export const Invoice = () => {
  const params = useParams();

  return (
    <>
      <h2>Details of invoice {params.invoiceId}</h2>
    </>
  );
};

export default Invoices;
