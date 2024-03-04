// TaskCreationForm.jsx
import React, { useState } from "react";

const TaskCreationForm = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleInputChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskDescription.trim()) return; // Prevent adding empty tasks

    addTask(taskDescription);
    setTaskDescription(""); // Clear input field
  };

  return (
    <form className="task-creation-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskCreationForm;
