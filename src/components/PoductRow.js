import { LinkContainer } from "react-router-bootstrap";

export default function PoductRow({ product }) {
  return (
    ///const {product} = props
    <tr>
      <td>{product.id}</td>
      <td style={{ textDecoration: "underline", cursor: "pointer" }}>
        <LinkContainer to={`/product/${product.id}`}>
          <span>{product.productDisplayName}</span>
        </LinkContainer>
      </td>
      <td>{product.masterCategory}</td>
      <td>{product.subCategory}</td>
      <td>{product.price}</td>
    </tr>
  );
}
