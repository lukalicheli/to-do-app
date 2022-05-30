import React, { useState } from "react";

function App2() {
  const [text, setText] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setListItem([...listItem, { name: text, done: true, id: Math.random() }]);
    setText("");
    console.log(listItem);
  }




const listItems = listItem.map((task) => {
    return <div style={{display: "flex", justifyContent: "space-around"}}>
    <li onClick={() => handleStatusChange(task.id)} style={{textDecoration: !task.done? "line-through" : "none"}} >{task.name}</li>
    <button onClick={() => removeItems(task.id)}>Trash</button>
    </div>
  });

  
  function removeItems(id) {
    const filteredItems = listItem.filter((task) => id !== task.id);
    setListItem(filteredItems);
  }
  

  function handleStatusChange(e) {
    const newTaskList = listItem.map((task) => {
      if (task.id === e) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    console.log(listItem);

    setListItem(newTaskList);
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" name="name" value={text} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul >{listItems}</ul>
    </div>
  );
}

export default App2;
