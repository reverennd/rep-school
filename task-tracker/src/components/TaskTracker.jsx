// TaskTracker.jsx
import React, { useState } from "react";
import TaskCreationForm from "./TaskCreationForm";
import TasksList from "./TasksList";

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskDescription) => {
    setTasks([...tasks, taskDescription]);
  };

  return (
    <div className="task-tracker">
      <TaskCreationForm addTask={addTask} />
      <TasksList tasks={tasks} />
    </div>
  );
};

export default TaskTracker;
