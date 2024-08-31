import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./index.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesVsOrdersChart = () => {
  const data = {
    labels: ["6/30/2024", "7/7/2024", "7/14/2024"],
    datasets: [
      {
        label: "Orders",
        data: [4, 3, 2],
        borderColor: "#FF8042",
        backgroundColor: "#FF8042",
        tension: 0.3,
      },
      {
        label: "Sales",
        data: [1404, 1200, 800],
        borderColor: "#8884d8",
        backgroundColor: "#8884d8",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw;
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Sales vs Orders</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesVsOrdersChart;
