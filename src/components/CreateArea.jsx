import React, { useState } from "react";

function CreateArea(props) {
  const [list, setTimes] = useState({
    times: "",
    todolist: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTimes(function (prevList) {
      return {
        ...prevList,
        [name]: value
      };
    });
  }
  function submitList(event) {
    props.onAdd(list);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="times"
          type="time"
          value={list.times}
        />
        <input
          onChange={handleChange}
          type="text"
          name="todolist"
          placeholder="To-Do-Task..."
          value={list.todolist}
        />
        <button onClick={submitList}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
