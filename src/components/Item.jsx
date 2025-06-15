function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{item.name}</span>
      <button>❌</button>
    </li>
  );
}

export default Item;
