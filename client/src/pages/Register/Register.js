/*STYLED-COMPONERNTS*/
import styled from "styled-components";
import { Mobile } from "../../Responsive/Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/originals/48/47/e6/4847e6ed26294bf852831230fe00bc62.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

  ${Mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Aggreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: none;
  color: white;
  background-color: teal;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First name..." />
          <Input placeholder="Last name..." />
          <Input placeholder="Your username..." />
          <Input placeholder="Your email..." />
          <Input placeholder="Password..." />
          <Input placeholder="Confirm password..." />
          <Aggreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the
            <b>PRIVACY POLICY</b>
          </Aggreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
