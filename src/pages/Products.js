import { useState, useEffect } from "react";
import axios from "axios";
import ProductsTable from "../components/ProductsTable";
import { useParams, useNavigate } from "react-router-dom";
import OptionGrid from "../components/OptionGrid.js";

let uniqueCategories;

export default function Products() {
  //let location = useLocation();
  //const { category: defaultCategory, subcategory: defaultSubcategory } =
  //  useParams();
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  //const defaultCategory = location?.state?.category || "";
  const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState(defaultCategory);
  // const [subcategory, setSubcategory] = useState(defaultSubcategory);

  useEffect(() => {
    axios.get("http://localhost:3005/products/").then(({ data }) => {
      //  const categories = data.map((product) => product.masterCategory);
      //  uniqueCategories = [...new Set(categories)];
      /*
    uniqueCategories =['category1', 'category2', 'category3']
    uniqueCategories =[{name: 'category1, id:'ruta-img'},{name: 'category2, id:'ruta-img'},{name: 'category2, img:'ruta-img'}]
    */
      uniqueCategories = data.reduce((acc, product) => {
        const { masterCategory: category, id } = product;
        const categoryExists = acc.find((item) => item.name === category);
        if (!categoryExists) {
          acc.push({ name: category, id });
        }
        return acc;
      }, []);
      setProducts(data);
    });
  }, []);

  // useEffect(() => {
  //   setCategory(defaultCategory);
  //   setSubcategory(defaultSubcategory);
  // }, [defaultCategory, defaultSubcategory]);

  if (products.length === 0) {
    return <div>Cargando...</div>;
  }
  const selectCategory = (event) => {
    navigate(`/products/${event.target.innerText || event.target.alt}`);
  };

  const loadProduct = (event) => navigate(`/product/${event.target.id}`);

  const selectSubcategory = (event) =>
    event.target.innerText === "Volver"
      ? navigate(`/products`)
      : //setSubcategory(event.target.innerText);
        navigate(
          `/products/${category}/${event.target.innerText || event.target.alt}`
        );

  const uniqueSubcategories = products
    .filter((product) => product.masterCategory === category)
    .reduce((acc, product) => {
      const { subCategory, id } = product;
      const subcategoryExists = acc.find((item) => item.name === subCategory);
      if (!subcategoryExists) {
        acc.push({ name: subCategory, id });
      }
      return acc;
    }, []);

  const filterProducts = products
    .filter((product) => product.masterCategory === category)
    .filter((product) => product.subCategory === subcategory)
    .map(({ productDisplayName: name, id, price }) => ({ name, id, price }));

  return (
    <>
      <h1>Productos</h1>
      <p>Selecciona alguna categoria para ver nuestros productos:</p>
      {!category && (
        <OptionGrid
          items={uniqueCategories}
          onClick={selectCategory}
          goUp={false}
        />
      )}
      {category && (
        <>
          <p> Selecciona alguna subcategoría para ver nuestros productos:</p>

          <OptionGrid
            items={uniqueSubcategories}
            defaultItem={subcategory}
            onClick={selectSubcategory}
            goUp={true}
          />
        </>
      )}
      {/* {category && subcategory && <ProductsTable products={filterProducts} />} */}
      {category && subcategory && (
        <OptionGrid items={filterProducts} onClick={loadProduct} goUp={false} />
      )}
    </>
  );
}
