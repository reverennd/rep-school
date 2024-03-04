// TasksList.jsx
import React from "react";

const TasksList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks to display</p>;
  }

  return (
    <ul className="tasks-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          {task}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
