import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  return (
    <div>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a task..." 
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} setTasks={setTasks} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;