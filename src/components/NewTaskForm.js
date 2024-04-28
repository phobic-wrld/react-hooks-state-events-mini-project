import React, { useState } from from "react";

function NewTaskForm({ onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ id: Date.now(), text, category });
    setText("");
    setCategory("All");
  } 
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
        value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
