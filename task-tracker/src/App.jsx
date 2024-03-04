import React from "react";

import Header from "./components/Header";
import TaskTracker from "./components/TaskTracker";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <TaskTracker />
    </div>
  );
};

export default App;
