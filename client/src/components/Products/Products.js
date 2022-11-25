import React, { useState, useEffect } from "react";
import axios from "axios";

/*DATA-IMPORT*/
// import { popularProducts } from "../Data/Data";

/*PRODUCT-IMPORT*/
import Product from "../Product/Product";

/*STYLED-COMPONENTS*/
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = (cat, sort, filters) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );

        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, products, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
