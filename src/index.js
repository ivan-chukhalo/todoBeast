import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { nanoid } from "nanoid";

const DATA = [
  { id: "todo-0", name: "Eat", isCompleted: true },
  { id: "todo-1", name: "Sleep", isCompleted: false },
  { id: "todo-2", name: "Repeat", isCompleted: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);