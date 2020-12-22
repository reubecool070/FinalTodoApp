import React from "react";

function List(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.times}</h1>
      <p>{props.todolist}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default List;
