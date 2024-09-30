import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({ label, datasets }) => {
  const diemAbetBarData = {
    labels: label, // Lo labels
    datasets,
  };

  const diemAbetBarOptions = {
    responsive: true, // Makes the chart responsive
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Bar data={diemAbetBarData} options={diemAbetBarOptions} />
    </div>
  );
};

export default BarChart;
