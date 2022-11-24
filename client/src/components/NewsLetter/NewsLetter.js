/*MATERIAL-ICONS*/
import Send from "@mui/icons-material/Send";

/*STYLED-COMPONENTS*/
import styled from "styled-components";
import { Mobile } from "../../Responsive/Responsive";

const Container = styled.div`
  height: 60vh;
  background-color: rgba(255, 182, 193, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;

  ${Mobile({
    fontSize: "50px",
  })}
`;

const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 300;

  ${Mobile({
    textAlign: "center",
  })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${Mobile({
    width: "80%",
  })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding: 20px;
  font-size: 20px;
  color: #5a5a5a;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email..." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
