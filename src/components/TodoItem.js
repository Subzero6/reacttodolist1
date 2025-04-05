import React from "react";

function TodoItem({ task, setTasks, index }) {
  const toggleComplete = () => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
      <button onClick={toggleComplete}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TodoItem;