import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [taskValue, setTaskValue] = useState("");
  const [taskList, setTaskList] = useState([
    { name: "Laundry", done: false, id: 1 },
    { name: "Food", done: true, id: 3 },
  ]);

  function addTask(event) {
    setTaskValue(event.target.value);

    console.log(taskValue);
  }

  function listTask(event) {
    event.preventDefault();
    setTaskList([
      ...taskList,
      { name: taskValue, done: false, id: Math.random() },
    ]);
    console.log(taskList);
    setTaskValue("");
  }

  function changeStatus(id) {

    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTaskList(newTaskList);
  }

  const listItems = taskList.map((task) => {
    console.log(task);
    return (
      <li
        onClick={() => changeStatus(task.id)}
        style={{ textDecoration: task.done ? "line-through" : "none" }}
      >
        {task.name}
      </li>
    );
  });

  return (
    <div className="App">
      <form onSubmit={listTask}>
        <label>
          Task:
          <input type="text" value={taskValue} onChange={addTask} />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
