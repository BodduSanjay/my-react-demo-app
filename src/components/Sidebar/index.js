import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/order">Order</Link>
      <Link to="/returns">Returns</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/shipping">Shipping</Link>
      <Link to="/channel">Channel</Link>
      <Link to="/integrations">Integrations</Link>
      <Link to="/calculators">Calculators</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/account">Account</Link>
    </div>
  );
};

export default Sidebar;
