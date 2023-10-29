import styled from "styled-components";

export const Container = styled.div`
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

export const FormContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 1047px;

  
  @media (min-width: 768px) {
  padding: 40px;
  }
`;


export const Wrapper = styled.div`
  padding: 10px;
`;