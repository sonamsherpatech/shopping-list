import React, { useState } from "react";
import Title from "./Title";
import ShoppingForm from "./ShoppingForm";
import List from "./List";

const items = [
  { id: 1, name: "Milk", bought: false },
  { id: 2, name: "Curd", bought: false },
  { id: 3, name: "Toothpaste", bought: false },
];

const App = () => {
  // const [items, setItem] = useState();
  return (
    <div className="app">
      <Title />
      <ShoppingForm />
      <List items={items} />
    </div>
  );
};

export default App;
