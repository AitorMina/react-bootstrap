import ListGroup from "react-bootstrap/ListGroup";

export default function OptionList(props) {
  const { items, defaultItem, onClick } = props;
  return (
    <>
      <ListGroup horizontal>
        {items.map((item) => (
          <ListGroup.Item
            key={item}
            active={item === defaultItem}
            onClick={onClick}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}
