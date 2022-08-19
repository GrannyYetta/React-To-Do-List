import "./App.css";
import React, { useState } from "react";

function App() {
  const [submit, addToDo] = useState(submitToDo);
  const submitToDo = (e) => {
    e.preventDefault();
  };

  return (
    <div className="todolist">
      <form className="add-to-do" onSubmit={submitToDo}>
        <input type="text" placeholder="Please add a task" />
        <label id="new-to-do" for="new-todo">
          New To Do
        </label>
        <button className="submit-to-do">Add To Do</button>
      </form>
    </div>
  );
}

export default App;
