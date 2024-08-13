import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TypeChart = ({ data }) => {
  const typeCount = data.reduce((acc, workout) => {
    acc[workout.type] = (acc[workout.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(typeCount),
    datasets: [
      {
        label: "Workout Type",
        data: Object.values(typeCount),
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(153,102,255,0.6)",
        ],
      },
    ],
  };

  return <Pie id="type" data={chartData} />;
};
export default TypeChart;
