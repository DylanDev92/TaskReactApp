import React, { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskAppContext(props) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    return () => {
      if (values.length === 0) {
        if (localStorage.getItem("data") !== null) {
          console.log("Hello");
          setValues(JSON.parse(localStorage.getItem("data")));
        }
      }
    };
  }, [TaskContext]);

  const save = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <TaskContext.Provider value={[values, setValues, save]}>
      {props.children}
    </TaskContext.Provider>
  );
}
