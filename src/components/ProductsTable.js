import Table from "react-bootstrap/Table";
import ProductRow from "./PoductRow";

export default function ProductsTable({ products }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre producto</th>
          <th>Categoria</th>
          <th>Subcategoria</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </Table>
  );
}
