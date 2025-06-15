import { useState } from "react";

function ShoppingForm() {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
