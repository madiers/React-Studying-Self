function ListGroup() {
  let items = ["New york", "London", "Astana"];
  items = [];

  return (
    <>
      <h1>Heading</h1>
      {items.length === 0 && <p>No Items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
