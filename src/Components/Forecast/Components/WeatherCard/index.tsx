import { FC } from "react";
import styled from "styled-components";
import { WeatherDailyResponse } from "../../../../Services/OpenWeather";
import dayjs from "dayjs";

const weatherLink = (icon: string) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;
const formatDate = (date: number, timezone: string) =>
  dayjs.unix(date).tz(timezone).format("ddd DD");

const WeatherCard: FC<WeatherCardProps> = ({ forecast }) => {
  return (
    <Card>
      <Day>{formatDate(forecast.dt, forecast.timezone)}</Day>
      <img
        src={weatherLink(forecast.weather[0].icon)}
        alt={forecast.weather[0].description}
        width="50"
        height="50"
      />
      <TempContainers>
        <MaxTemp>{forecast.temp.max.toFixed(0)}º</MaxTemp>
        <MinTemp>{forecast.temp.min.toFixed(0)}º</MinTemp>
      </TempContainers>
      <Condition>{forecast.weather[0].description}</Condition>
    </Card>
  );
};

export default WeatherCard;

interface WeatherCardProps {
  forecast: WeatherDailyResponse;
}

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
