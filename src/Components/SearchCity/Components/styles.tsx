import styled from "styled-components";

export const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 600px;
  padding: 0.75rem;
  color: #f48403;
  font-size: 1rem;
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export  const InputContainer = styled.span`
  display: flex;
  position: relative;
  align-items: center;
  background-color: #232229;
  border-radius: 5px;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;
