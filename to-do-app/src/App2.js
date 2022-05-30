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


const filteredItems = listItem.filter(task =>  task.done
     ) 

const listItems = filteredItems.map((task) => {
    return <li onClick={() => handleStatusChange(task.id)}>{task.name}</li>;
  });


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
      <ul>{listItems}</ul>
    </div>
  );
}

export default App2;
