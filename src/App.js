import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import { pageLinks } from "./data";
import "./style/Navbar.css";
import "./style/Form.css";

import "./style/Dashboard.css";
import Footer from "./components/Footer";

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = localStorage.getItem("workouts");
    return savedWorkouts ? JSON.parse(savedWorkouts) : [];
  });

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter((_, index) => index !== id);
    setWorkouts(updatedWorkouts);
  };

  const clearWorkouts = () => {
    setWorkouts([]);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <h1>Fitness Tracker</h1>
            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => (
              <li key={link.id} className="nav-link">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className={`side-menu ${showMenu ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>

        {pageLinks.map((link) => (
          <a key={link.id} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>

      <Form addWorkout={addWorkout} clearWorkouts={clearWorkouts} />
      <Dashboard workouts={workouts} deleteWorkout={deleteWorkout} />

      <Footer />
    </div>
  );
}

export default App;
