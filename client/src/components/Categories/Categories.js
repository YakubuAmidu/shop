/*STYLED-COMPNENTS*/
import styled from "styled-components";
import { Mobile } from "../../Responsive/Responsive";

/*DATA-CATEGORIES*/
import { categories } from "../Data/Data";

import CategoryItem from "../CategoryItem/CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${Mobile({
    padding: "0px",
    flexDirection: "column",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
