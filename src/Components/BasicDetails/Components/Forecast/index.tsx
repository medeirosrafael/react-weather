import { FC } from "react";
import WeatherCard from "./Components/WeatherCard";
import { Container, ContainerTitle, Wrapper } from "./styles";

const Forecast: FC = () => {
  return (
    <Container>
      <ContainerTitle>5 DAYS FORECAST</ContainerTitle>
      <Wrapper>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </Wrapper>
    </Container>
  );
};

export default Forecast;
