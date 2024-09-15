import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { groupByMonth } from "../../services/group";
import { fetchData } from "../../services/fetchDataDashboard";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import "./charts.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      const groupedData = groupByMonth(data);
      const labels = Object.keys(groupedData);

      const datasets = labels.map((month) => {
        const values = groupedData[month].map((entry) => entry["4. close"]);
        return {
          label: `Month: ${month}`,
          data: values,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
        };
      });

      setChartData({
        labels,
        datasets,
      });
    };

    loadData();
  }, []);

  return (
    <div className="chart_container">
      <p className="text-primary">Timeline</p>
      <h2 className="font-bold">Data Timeline</h2>

      <div className="action_buttons">
        <button className="bg-bluecustom px-4 py-2 rounded-md text-white">
          Month
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-700">
          Year
        </button>
      </div>

      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
