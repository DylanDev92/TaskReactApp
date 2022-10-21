import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskAppContext(props) {
  const [values, setValues] = useState([]);

  return (
    <TaskContext.Provider value={[values, setValues]}>{props.children}</TaskContext.Provider>
  );
}
