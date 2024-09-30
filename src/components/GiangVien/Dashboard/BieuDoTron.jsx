import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, data, option }) => {
  const pieData = {
    labels: labels,
    datasets: [
      {
        data: data, // Assuming tiLeDauRot has pass and fail counts
        ...option,
      },
    ],
  };
  const diemAbetBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return <Pie data={pieData} options={diemAbetBarOptions} />;
};
export default PieChart;
