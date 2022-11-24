/*IMPORTED-COMPONENTS*/
import Announcement from "../../components/Announcement/Announcement";
import Navbar from "../../components/Navbar/Navbar";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

/*MARTERIAL-ICONS*/
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

/*STYLED-COMPONENTS*/
import styled from "styled-components";
import { Mobile } from "../../Responsive/Responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;

  ${Mobile({
    padding: "10px",
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${Mobile({
    flexDirection: "column",
  })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${Mobile({
    margin: "20px 0px",
  })}
`;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${Mobile({
    flexDirection: "column",
  })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${Mobile({
    flexDirection: "column",
  })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

  ${Mobile({
    flexDirection: "column",
  })}
`;

const Image = styled.img`
  width: 200px;

  ${Mobile({
    width: "100%",
    height: "40vh",
    objectFit: "contain",
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  ${Mobile({
    marginBottom: "20px",
  })}
`;

const ProductId = styled.span`
  ${Mobile({
    marginBottom: "20px",
  })}
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};

  ${Mobile({
    marginBottom: "20px",
  })}
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  ${Mobile({
    margin: "5px 15px",
  })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  ${Mobile({
    marginBottom: "20px",
  })}
`;

const Hr = styled.hr`
  background: #eee;
  border: none;
  height: 1px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;

  ${Mobile({
    fontSize: "30px",
  })}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bag (2)</TopText>
            <TopText>Your wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://ae01.alicdn.com/kf/HTB1htB.aKL2gK0jSZFmq6A7iXXaf/MANTLCONX-Newest-Solid-Autumn-Mens-Jackets-Male-Casual-Zipper-Summer-Jacket-Men-Spring-Casual-Outwear-Men.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> JESSIE THUNDERR SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 999000388383
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size: </b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Price: $ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://cdn.shopify.com/s/files/1/1025/3059/products/NAVY_BLUE_SUIT__075_0ba78598-6c22-4024-820e-019a5fdb109a_830x1230_crop_center.jpg?v=1643118883" />
                <Details>
                  <ProductName>
                    <b>Product: </b> CLASSIC MENS KUMASI SUIT
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 999000388383
                  </ProductId>
                  <ProductColor color="darkblue" />
                  <ProductSize>
                    <b>Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>Price: $ 100</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$ - 3.90</SummaryItemPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 85</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;
