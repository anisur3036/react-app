import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <ul>
      {tasks.map((task) => {
        return <Task task={task} key={task.id} />;
      })}
    </ul>
  );
};

export default TaskList;
