import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./index.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const PortionOfSalesChart = () => {
  const data = {
    labels: ["WooCommerce Store", "Shopify Store"],
    datasets: [
      {
        label: "Portion of Sales",
        data: [74.2, 55.8],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Portion of Sales</h2>
      <Pie data={data} />
    </div>
  );
};

export default PortionOfSalesChart;
