import React, { useState } from "react";
import Title from "./Title";
import ShoppingForm from "./ShoppingForm";
import List from "./List";

// const items = [
//   { id: 1, name: "Milk", bought: false },
//   { id: 2, name: "Curd", bought: false },
//   { id: 3, name: "Toothpaste", bought: true },
// ];

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Title />
      <ShoppingForm onAddItems={handleAddItems} />
      <List
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default App;
