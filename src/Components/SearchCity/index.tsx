import { FC } from "react";
import styled from "styled-components";

const SearchCity: FC = () => {
  return (
    <Container>
      <FormContainer>
        <Label>City Name</Label>
        <Input type="text" />
      </FormContainer>
    </Container>
  );
};

export default SearchCity;

const Input = styled.input`
  border-radius: 5px;
  border: none;
  background-color: #232229;
  width: 600px;
  padding: 0.75rem;
  color: #F48403;
  font-size: 1rem;
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;
