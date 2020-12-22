import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import CreateArea from "./CreateArea";

function App() {
  const [lists, setLists] = useState([]);

  const sorting = () => {
    const a = lists.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    setLists(a);
  };

  function listDeleted(id) {
    setLists(function (prevLists) {
      return prevLists.filter(function (listItem, index) {
        return index !== id;
      });
    });
  }

  function addList(newlist) {
    setLists(function (prevLists) {
      return [...prevLists, newlist];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addList} />
      {lists.map(function (listItem, index) {
        return (
          <List
            onChange={sorting}
            key={index}
            id={index}
            onDelete={listDeleted}
            times={listItem.times}
            todolist={listItem.todolist}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
