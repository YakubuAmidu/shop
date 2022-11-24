/*DATA-IMPORT*/
import { popularProducts } from "../Data/Data";

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

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
