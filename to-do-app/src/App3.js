import React, { useState } from "react";

function App3() {
  const [text, setText] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedItems = [
      ...listItems,
      { name: text, done: false, id: Math.random() },
    ];
    setText("");
    setListItems(updatedItems);
    console.log(listItems);
  }

  function updateText(event) {
    setText(event.target.value);
  };

  function handleRemove(id) {
    const filteredItems = listItems.filter((items) => id !== items.id);
    setListItems(filteredItems);
  }

  function handleStatusChange(id){
      const changedStatus = listItems.map((items) => {
          if(items.id === id) {
              return {...items, done: !items.done}
          }
          return items;
      })
      console.log(listItems);
      setListItems(changedStatus);
  }
 
  const renderItems = listItems.map((items) => {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <li onClick={() => handleStatusChange(items.id)}>{items.name}</li>
        <button onClick={() => handleRemove(items.id)}>Trash</button>
      </div>
    );
  });

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" name="name" value={text} onChange={updateText} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>{renderItems}</ul>
    </div>
  );
}

export default App3;
