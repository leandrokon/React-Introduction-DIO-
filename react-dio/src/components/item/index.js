const Item = (props) => {
  return (
    <li className="list">
      <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
       {props.text}
      </a>
    </li>
  );
};

export default Item;
