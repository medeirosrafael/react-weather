import { FC } from "react";
import styled from "styled-components";

const WeatherCard: FC = () => {
  return (
    <Card>
      <Day>Fri 29</Day>
      <img
        src="http://openweathermap.org/img/wn/04d@2x.png"
        alt="chovendo"
        width="50"
        height="50"
      />
      <TempContainers>
        <MaxTemp>21º</MaxTemp>
        <MinTemp>10º</MinTemp>
      </TempContainers>
      <Condition>light rain</Condition>
    </Card>
  );
};

export default WeatherCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    0deg,
    rgba(196, 196, 196, 0.2) -79.96%,
    rgba(196, 196, 196, 0.0877044) 6.86%,
    rgba(196, 196, 196, 0) 98.31%
  );
  padding: 1rem 0.5rem;
  width: 110px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const Day = styled.h4`
  color: #fff;
  font-size: 1rem;
`;

const MaxTemp = styled.h3`
  font-size: 1.6rem;
`;

const MinTemp = styled.h3`
  font-size: 1.3rem;
  color: #fff;
`;

const TempContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Condition = styled.p`
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  margin-top: 1rem;
`;
