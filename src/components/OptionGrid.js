import { FixedSizeGrid as Grid } from "react-window";
import Card from "react-bootstrap/Card";

export default function OptiongGrid(props) {
  const { items, onClick, goUp, defaultItem } = props;
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {goUp && (
        <Card
          key={"Subir"}
          style={{ width: "140px", margin: "10px" }}
          onClick={onClick}
        >
          <Card.Footer>Featured</Card.Footer>
          <Card.Img
            variant="top"
            src={`https://juanda.certweb.infenlaces.com/images/2345.jpg`}
            alt="Volver"
          />
          <Card.Body>
            <Card.Title>Volver</Card.Title>
          </Card.Body>
        </Card>
      )}
      {items.map(({ name, id, price }) => (
        <Card
          key={name}
          style={{ width: "140px", margin: "10px" }}
          onClick={onClick}
          id={id}
          border={defaultItem === name ? "primary" : ""}
        >
          <Card.Img
            variant="top"
            src={`https://juanda.certweb.infenlaces.com/images/${id}.jpg`}
            alt={name}
            id={id}
          />
          <Card.Body>
            <Card.Title id={id}>{name}</Card.Title>
          </Card.Body>
          {price && <Card.Footer>{price}€</Card.Footer>}
        </Card>
      ))}
    </div>
  );
}
