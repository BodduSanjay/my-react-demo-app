import React from "react";
import SalesVsOrdersChart from "../SalesVsOrdersChart";
import PortionOfSalesChart from "../PortionOfSalesChart";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-section">
        <SalesVsOrdersChart />
      </div>
      <div className="dashboard-section">
        <PortionOfSalesChart />
      </div>
    </div>
  );
};

export default Dashboard;
