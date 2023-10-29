import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 80px 40px;
  background-color: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: none;
  height: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  max-width: 320px;
  width: 70%;
`;

export const Label = styled.label`
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const Input = styled.input`
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

export const CheckboxLabel = styled.label`
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

export const Checkbox = styled.input`
  margin-right: 5px;

  accent-color: #f78719;
`;

export const Heading = styled.h1`
  color: #04072f;

  text-align: center;
  font-family: inherit;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 52.8px */
`;

export const CheckDiv = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

export const Link = styled.a`
  font-size: 13px;
  color: #f78719;
  text-align: right;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 19.8px */
  text-decoration: none;
`;

export const Field = styled.div`
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

export const Button = styled.button`
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
  font-size: 18px;

  &:hover {
    background: #1fa7f0;
  }
`;

export const Register = styled.div`
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