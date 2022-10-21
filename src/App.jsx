import { useState, useContext, useEffect } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";
import { TaskContext } from "./context/TaskAppContext";

function App() {
  const [values, setValues] = useContext(TaskContext);

  const [deleting, setDeleting] = useState(false);

  const [hovering, setHovering] = useState(false);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log(title + " " + description);
  }, [title, description]);

  return (
    <>
      <header
        style={{
          backgroundColor: "#000814",
          boxShadow: "0em 0.2em 1em black",
          marginBottom: "2em",
        }}
      >
        <h2
          style={{
            margin: "0",
            color: "#FFD60A",
            padding: "1em",
            textAlign: "center",
          }}
        >
          Task List with React
        </h2>
      </header>

      <div style={{ backgroundColor: "#001D3D", padding: "2em" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (title !== "") {
              setValues([
                ...values,
                { titulo: title, description: description },
              ]);
            }
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              fontSize: "0.5em",
              marginBottom: "1em",
            }}
          >
            <h3
              style={{
                fontSize: "3em",
                margin: 0,
                color: "#FFD60A",
                marginRight: "1em",
              }}
            >
              Titulo:{" "}
            </h3>
            <input
              style={{
                width: "100%",
                borderRadius: "1em",
                paddingLeft: "0.5em",
                paddingRight: "0.5em",
                border: "none",
              }}
              type="text"
              placeholder="Sacar la basura"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              fontSize: "0.5em",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontSize: "1.69em",
                margin: 0,
                color: "#FFD60A",
                marginRight: "1em",
              }}
            >
              Descripción:{" "}
            </h3>
            <input
              style={{
                width: "100%",
                borderRadius: "1em",
                paddingLeft: "0.5em",
                paddingRight: "0.5em",
                border: "none",
                padding: "0.7em",
              }}
              type="text"
              placeholder="Sacar la basura a las 10 P.M"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1em",
            }}
          >
            <button
              style={{
                backgroundColor: hovering ? "#FFC300" : "#FFD60A",
                color: "#001D3D",
                fontSize: "1em",
                margin: "0",
                border: "none",
                borderRadius: "0.5em",
                padding: "0.5em",
                fontWeight: 600,
                cursor: "pointer",
              }}
              onMouseEnter={() => {
                setHovering(true);
              }}
              onMouseOut={() => {
                setHovering(false);
              }}
            >
              Añadir Tarea
            </button>
          </div>
        </form>
      </div>

      {values.map((x, index) => {
        return (
          <div key={index}>
            <TaskCard
              title={x.titulo}
              description={x.description}
              idCard={index}
              deleting={deleting}
              setDeleting={setDeleting}
            />
          </div>
        );
      })}
    </>
  );
}

export default App;
