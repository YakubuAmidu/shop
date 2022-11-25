/*STYLED-COMPONENTS*/
import styled from "styled-components";
import { Mobile } from "../../Responsive/Responsive";

/*LINK*/
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
  border: 1px solid lightgray;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${Mobile({
    height: "30vh",
  })}
`;

const Info = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  font-weight: 600;
  color: darkgray;
  background-color: white;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
