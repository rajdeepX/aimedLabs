import styled, { createGlobalStyle } from "styled-components";
import image from "./assets/img.png";

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  body{
    font-family: 'Poppins', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 712px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1047px;
  padding: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 80px 40px;
  background-color: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: none;
  height: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 320px;
  width: 70%;
`;

const Label = styled.label`
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  color: #737b86;
  font-family: inherit;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  width: 100%;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #737b86;
  font-family: inherit;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 19.8px */

  & > span > a {
    text-decoration: underline;
  }
`;

const Checkbox = styled.input`
  margin-right: 5px;

  accent-color: #f78719;
`;

const Heading = styled.h1`
  color: #04072f;

  text-align: center;
  font-family: inherit;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 52.8px */
`;

const CheckDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  font-size: 13px;
  color: #f78719;
  text-align: right;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 19.8px */
  text-decoration: none;
`;

const Field = styled.div`
  width: 100%;
  position: relative;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > svg {
    position: absolute;
    top: 57%;
    right: 3%;
    width: 20px;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  background: #1575a7;
  padding: 12px;
  color: #fff;
  max-width: 538px;
  width: 80%;
  border: none;
  font-family: inherit;
  margin: 10px auto;
  font-weight: 500;

  &:hover {
    background: #1fa7f0;
  }
`;

const Register = styled.div`
  & > p {
    color: #04072f;

    font-family: inherit;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }

  & > p > span > a {
    text-decoration: underline;
    font-weight: 700;
  }
`;

const Wrapper = styled.div`
  padding: 40px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <ImageContainer>
            <Image src={image} alt="Registration Image" />
          </ImageContainer>
          <FormContainer>
            <Form>
              <Heading>Login</Heading>

              <Field>
                <Label htmlFor="loginId">Login ID</Label>
                <Input type="text" id="loginId" placeholder="Enter Login ID" />
              </Field>

              <Field>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.185 19.368L13.764 16.9455C12.8278 17.2802 11.8157 17.3422 10.8456 17.1243C9.87554 16.9063 8.98729 16.4173 8.28423 15.7143C7.58117 15.0112 7.09221 14.123 6.87424 13.1529C6.65628 12.1828 6.71827 11.1707 7.053 10.2345L3.963 7.1445C1.407 9.417 0 12 0 12C0 12 4.5 20.25 12 20.25C13.4406 20.245 14.8649 19.9448 16.185 19.368ZM7.815 4.632C9.13508 4.05514 10.5594 3.75496 12 3.75C19.5 3.75 24 12 24 12C24 12 22.5915 14.5815 20.0385 16.857L16.9455 13.764C17.2802 12.8278 17.3422 11.8157 17.1243 10.8456C16.9063 9.87554 16.4173 8.98729 15.7143 8.28423C15.0112 7.58117 14.123 7.09221 13.1529 6.87424C12.1828 6.65628 11.1707 6.71827 10.2345 7.053L7.815 4.6335V4.632Z"
                    fill="#737B86"
                  />
                  <path
                    d="M8.28774 11.469C8.20523 12.0455 8.25811 12.6332 8.44218 13.1857C8.62626 13.7382 8.93648 14.2402 9.34826 14.652C9.76003 15.0638 10.2621 15.374 10.8145 15.5581C11.367 15.7421 11.9548 15.795 12.5312 15.7125L8.28624 11.469H8.28774ZM15.7127 12.531L11.4692 8.286C12.0457 8.20349 12.6335 8.25637 13.1859 8.44044C13.7384 8.62452 14.2404 8.93474 14.6522 9.34652C15.064 9.75829 15.3742 10.2603 15.5583 10.8128C15.7424 11.3653 15.7952 11.953 15.7127 12.5295V12.531ZM20.4692 21.531L2.46924 3.531L3.53124 2.469L21.5312 20.469L20.4692 21.531Z"
                    fill="#737B86"
                  />
                </svg>
              </Field>

              <CheckDiv>
                <CheckboxLabel>
                  <Checkbox type="checkbox" id="rememberMe" />
                  Remember me
                </CheckboxLabel>
                <Link href="#">Change Password</Link>
              </CheckDiv>

              <CheckboxLabel>
                <Checkbox type="checkbox" id="agreeToTerms" />
                Agree to&nbsp;{" "}
                <span>
                  <Link href="#">Terms & Conditions</Link>
                </span>
              </CheckboxLabel>

              <Button type="submit">Login</Button>

              <Register>
                <p>
                  Don&apos;t have an account?{" "}
                  <span>
                    <Link>Register Here</Link>
                  </span>
                </p>
              </Register>
            </Form>
          </FormContainer>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
