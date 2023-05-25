 import React, { useState } from "react";
 export default function BucketList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("add a todo to your bucket list");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
    console.log(items);
  }
  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
  }
  function editItem(id){

  }
  return (
    <div className="App">
      <h1>Todo list</h1>
      <input
      class="form-control form-control-lg" type="text" 
        // type="text"
        placeholder="add todo's"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button className="btn btn-primary" onClick={() => addItem()}>Add</button>
      
      <hr/>
      <ul  >
       
        {items.map((item) => {
          return <li className="output" key={item.id}>{item.value} <button style={{gap: '10px'}} className="btn btn-primary" onClick={()=> deleteItem(item.id)} >
           delete </button > 
           
           <button className="btn btn-primary">edit</button>
           <hr/>
            </li>;
            
        })}
      </ul>
    </div>
  );
}

