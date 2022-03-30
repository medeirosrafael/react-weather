import { FC } from "react";
import styled from "styled-components";

const NoResults: FC<NoResultsProps> = ({ term }) => {
  return (
    <Container>
      <span>
        Your search <strong>{term}</strong> did not match any results
      </span>
    </Container>
  );
};

interface NoResultsProps {
  term: string;
}

export default NoResults;

const Container = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
