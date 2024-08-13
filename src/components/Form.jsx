import React, { useState } from "react";
import "../style/Navbar.css";

const Form = ({ addWorkout, clearWorkouts }) => {
  const [workout, setWorkout] = useState("");
  const [type, setType] = useState("Cardio");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (workout && duration && type) {
      addWorkout({ workout, duration, type });
      setWorkout("");
      setDuration("");
      setType("Cardio");
    }
  };

  return (
    <form id="workout" className="form" onSubmit={handleSubmit}>
      <h2>Track Your Workout</h2>
      <input
        type="text"
        placeholder="Workout"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration (mins)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Cardio">Cardio</option>
        <option value="Strength">Strength</option>
        <option value="Flexibility">Flexilibilty</option>
        <option value="Balance">Balance</option>
      </select>
      <button type="submit">Add Workout</button>
      <button type="button" onClick={clearWorkouts}>
        Clear All
      </button>
    </form>
  );
};
export default Form;
