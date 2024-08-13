import React from "react";

const WorkoutList = ({ workouts }) => {
  return (
    <ul>
      {workouts.map((workout, index) => (
        <li key={index}>
          {workout.workout} - {workout.duration} mins
        </li>
      ))}
    </ul>
  );
};
export default WorkoutList;
