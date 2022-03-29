import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TemperatureOptionsContainer = styled(Wrapper)`
  justify-content: space-between;
  margin-left: 1rem;
`;

export const TemperatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0rem 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background-color: #232229;
`;
