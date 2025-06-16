function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <li className={item.bought ? "bought" : ""}>
      <input
        type="checkbox"
        value={item.bought}
        onChange={() => onToggleItem(item.id)}
      />
      <span>{item.name}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
