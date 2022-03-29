import { FC, useContext } from "react";
import {
  WeatherContext,
  WeatherContextType,
} from "../../Contexts/WeatherContext";
import { WeatherDailyResponse } from "../../Services/OpenWeather/types";
import WeatherCard from "./Components/WeatherCard";
import { Container, ContainerTitle, Wrapper } from "./styles";

const Forecast: FC = () => {
  const { currentDaily } = useContext(WeatherContext) as WeatherContextType;
  if (!currentDaily?.length) return null;

  const renderWeatherCard = (forecast: WeatherDailyResponse) => (
    <WeatherCard key={forecast.dt.toString()} forecast={forecast} />
  );

  return (
    <Container>
      <ContainerTitle>5 DAYS FORECAST</ContainerTitle>
      <Wrapper>
        {currentDaily.map(renderWeatherCard)}
      </Wrapper>
    </Container>
  );
};

export default Forecast;
