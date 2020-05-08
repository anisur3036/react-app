import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTask] = useState([
    { title: "Go to market", id: 1 },
    { title: "Buy the book", id: 2 },
    { title: "Read the book", id: 3 },
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
