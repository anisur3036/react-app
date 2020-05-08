import React from "react";

const Task = ({ task }) => {
  return (
    <li>
      <span>{task.title}</span>
      <div className="inline">
        <button className="btn btn-delete text-sm">❌</button>
        <button className="btn btn-edit text-green-600">🖋</button>
      </div>
    </li>
  );
};

export default Task;
