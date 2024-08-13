import React from "react";
import WorkoutChart from "./WorkoutChart";
import TypeChart from "./TypeChart";
import "../style/Dashboard.css";

const Dashboard = ({ workouts, deleteWorkout }) => {
  // Display the last 5 activities
  const recentWorkouts = workouts.slice(-5).reverse();

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Recent Activities</h2>
      <ul className="recent-activities">
        {recentWorkouts.map((workout, id) => (
          <li key={id} className="activity-item">
            <span className="activity-details">
              {workout.workout} - {workout.duration} mins
            </span>
            <button className="delete-btn" onClick={() => deleteWorkout(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="charts">
        <div className="chart-container">
          <h2>Time spent on exercises</h2>
          <WorkoutChart data={workouts} />
        </div>
        <div className="chart-container">
          <h2>Type of exercises</h2>
          <TypeChart data={workouts} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
