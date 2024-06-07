import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [pushText, setText] = useState([]);

  function handleClick() {
    console.log("click");
    setText((prevValue) => [...prevValue, name]);
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={name} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {pushText.map((pushText, index) => (
            <li key={index}>{pushText}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
