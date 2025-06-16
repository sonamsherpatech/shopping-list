function Item({ item }) {
  return (
    <li className={item.bought ? "bought" : ""}>
      <input type="checkbox" />
      <span>{item.name}</span>
      <button>❌</button>
    </li>
  );
}

export default Item;
