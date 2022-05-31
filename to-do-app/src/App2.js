import React, { useState } from "react";

function App2() {

  
    const [text, setText] = useState("");
    const [listItem, setListItem] = useState([]);

  React.useEffect(() => {
   
    const initialState = localStorage.getItem("listItem");
    const parsedInitialState = JSON.parse(initialState);
    //a person who has not been to our website before should have empty object with key listItem
    // this is saying that if local storage is empty to update the state to equal local storage
    if(initialState !== undefined) {
      setListItem(parsedInitialState);
    }
    
  }, []);
  

  React.useEffect(() => {
   debugger
   const localData = localStorage.getItem("listItem");
   const localDataStr = JSON.stringify(localData);
   const currentState = JSON.stringify(listItem);
    if ( localDataStr !== currentState ) {
      saveLocal(listItem);
    }

    //on initial load update current state with local storage
    // on the subsequent update, update the local storage to equal current state
  }, [JSON.stringify(listItem)]);



  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
  
    event.preventDefault();
    const submitData = [
      ...listItem,
      { name: text, done: true, id: Math.random() },
    ];
    setListItem(submitData);
    setText("");
    console.log(listItem);
  };

  function saveLocal(obj) {
    localStorage.setItem("listItem", JSON.stringify(obj));
  }

  const listItems = listItem.map((task) => {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <li
          onClick={() => handleStatusChange(task.id)}
          style={{ textDecoration: !task.done ? "line-through" : "none" }}
        >
          {task.name}
        </li>
        <button onClick={() => removeItems(task.id)}>Trash</button>
      </div>
    );
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
      <ul>{listItems}</ul>
    </div>
  );
}

export default App2;
