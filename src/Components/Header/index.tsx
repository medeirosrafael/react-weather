import { FC } from "react";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <header>
      <Container>
        <Title>React Weather</Title>
      </Container>
    </header>
  );
};

export const Title = styled.h1`
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #232229;
  padding: 2rem;
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default Header;
