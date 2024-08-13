import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const WorkoutChart = ({ data }) => {
  const chartData = {
    labels: data.map((workout) => workout.workout),
    datasets: [
      {
        label: "Time spent on workout",
        data: data.map((workout) => workout.duration),
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Your progress",
      },
    },
  };

  return <Bar id="time" data={chartData} options={options} />;
};
export default WorkoutChart;
