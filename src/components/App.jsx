import React, { useState } from "react";
import Title from "./Title";
import ShoppingForm from "./ShoppingForm";
import List from "./List";

// const shoppingItems = [
//   { id: 1, name: "Milk", bought: false },
//   { id: 2, name: "Curd", bought: false },
//   { id: 3, name: "Toothpaste", bought: true },
// ];

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Title />
      <ShoppingForm onAddItems={handleAddItems} />
      <List items={items} />
    </div>
  );
};

export default App;
