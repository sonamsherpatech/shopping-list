import { useState } from "react";

function ShoppingForm({ onAddItems }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) return;
    const newItem = { name: item, bought: false, id: Date.now() };
    onAddItems(newItem);
    setItem("");
  }
  return (
    <div className="shopping-form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter shopping item"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default ShoppingForm;
