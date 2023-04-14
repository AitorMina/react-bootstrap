import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Product() {
  const [product, setProduct] = useState();
  const { id: productId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3005/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }
  const {
    productDisplayName: name,
    price,
    masterCategory: category,
    subCategory,
  } = product;
  return (
    <>
      <h1>Productos</h1>

      <Breadcrumb>
        <LinkContainer to={`/products/${category}`}>
          <Breadcrumb.Item>{category}</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to={`/products/${category}/${subCategory}`}>
          <Breadcrumb.Item>{subCategory}</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to={`/products/${category}/${subCategory}`}>
          <Breadcrumb.Item active>{name}</Breadcrumb.Item>
        </LinkContainer>
      </Breadcrumb>

      <p>Aqui renderizamos el producto con id {productId}</p>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={`https://juanda.certweb.infenlaces.com/images/${productId}.jpg`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          {/* <LinkContainer to="/products" state={{ category: category }}> */}
          {/* <LinkContainer to={`/products/${category}`}>
            <Card.Link>{category}</Card.Link>
          </LinkContainer>
          <LinkContainer to={`/products/${category}/${subCategory}`}>
            <Card.Link>{subCategory}</Card.Link>
          </LinkContainer> */}
        </Card.Body>
        <Button variant="primary">Comprar</Button>
      </Card>

      {/* {products.map((product)=>
      <Producto key={product.id} product={product})} */}
    </>
  );
}
