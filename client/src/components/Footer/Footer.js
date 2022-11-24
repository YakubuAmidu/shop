/*MATERIAL-ICONS*/
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import FmdGood from "@mui/icons-material/FmdGood";
import Phone from "@mui/icons-material/Phone";
import Mail from "@mui/icons-material/Mail";

/*STYLED-COMPONENTS*/
import styled from "styled-components";
import { Mobile, Tablet } from "../../Responsive/Responsive";

const Container = styled.div`
  display: flex;

  ${Mobile({
    flexDirection: "column",
  })}

  ${Tablet({
    flexDirection: "column",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.7s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${Mobile({
    backgroundColor: "#fff8f8",
  })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Yakubu.</Logo>
        <Desc>
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized word's which don't even look even slightly
          believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="0072B1">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="333">
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Womens Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FmdGood style={{ marginRight: "10px" }} />
          555 adams blvd, Los Angeles, CA, 669900
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          1+ 333-555-6789
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          contact@support.com
        </ContactItem>
        <Payment src="https://www.nicepng.com/png/detail/207-2076847_paypal-acceptance-mark-major-credit-card-logos-png.png" />
      </Right>
    </Container>
  );
};

export default Footer;
