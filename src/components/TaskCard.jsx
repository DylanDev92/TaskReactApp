import React, { useContext, useState } from "react";
import { TiDelete, TiTick } from "react-icons/ti";

import { TaskContext } from "../context/TaskAppContext";

export default function TaskCard(props) {
  const [values, setValues, save] = useContext(TaskContext);

  const [done, setDone] = useState(false);

  return (
    <div
      className="card"
      style={{
        margin: "1em",
        padding: "1em",
        backgroundColor: done ? "#000814" : "#001D3D",
        color: "#FFD60A",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: ".5em",
        alignItems: "center",
        paddingLeft: "2em",
        paddingRight: "2em",
        boxShadow: "0em 0.2em 1em black",
        marginTop: "1.2em",
        transform: done ? "translate(150em)" : "",
        transition: done ? "all 1s ease-in" : "",
        position: done ? "fixed" : ""
      }}
    >
      <div style={{display: done ? "none" : ""}}>
        <h2 style={{ margin: "0" }}>{props.title}</h2>
        <h5 style={{ margin: "0" }}>{props.description}</h5>
      </div>
      <div>
        {/* <TiDelete onClick={(e) => {
            setValues(values.filter(x => values.indexOf(x) !== props.id));
        }} className="cursorHover" cursor={"pointer"} color="#FFC300" fontSize={"3em"} /> */}
        <TiTick
          onClick={(e) => {
            if (props.deleting === false) {
              props.setDeleting(true);
              setDone((x) => !x);
              setTimeout(() => {
                setValues(
                  values.filter((x) => values.indexOf(x) !== props.idCard)
                );
                setDone(false);
                props.setDeleting(false);
                save(values.filter((x) => values.indexOf(x) !== props.idCard));
              }, 1000);
            }
          }}
          className="cursorHover"
          cursor={"pointer"}
          color="#FFC300"
          fontSize={"3em"}
        />
      </div>
    </div>
  );
}
