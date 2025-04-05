import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>My To-Do List</h1>
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;