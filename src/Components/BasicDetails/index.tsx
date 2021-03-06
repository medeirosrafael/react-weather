import dayjs from "dayjs";
import { FC, useContext } from "react";
import {
  WeatherContext,
  WeatherContextType,
} from "../../Contexts/WeatherContext";
import TEMPERATURE_UNITS, {
  TemperatureUnitInterface,
} from "../../Services/TemperatureUnits";
import CityName from "./Components/CityName";
import TemperatureUnit from "./Components/TemperatureUnit";
import TemperatureValue from "./Components/TemperatureValue";
import WeekDayClimate from "./Components/WeekDayCondition";
import {
  Container,
  TemperatureContainer,
  TemperatureOptionsContainer,
  Wrapper,
} from "./styles";

const BasicDetails: FC = () => {
  const { currentWeather, setCurrentUnit, currentUnit, currentCity } =
    useContext(WeatherContext) as WeatherContextType;

  if (!currentWeather || !currentCity) return null;

  const renderTemperatureUnit = (unit: TemperatureUnitInterface) => (
    <TemperatureUnit
      key={unit.type}
      unit={unit}
      selected={currentUnit?.type === unit?.type}
      onClick={setCurrentUnit}
    />
  );

  return (
    <Container>
      <Wrapper>
        <CityName city={`${currentCity.name}, ${currentCity.state}`} />
        <TemperatureContainer>
          <TemperatureValue value={currentWeather.main.temp.toFixed(0)} />
          <TemperatureOptionsContainer>
            {TEMPERATURE_UNITS.map(renderTemperatureUnit)}
          </TemperatureOptionsContainer>
        </TemperatureContainer>
        <WeekDayClimate
          day={dayjs.unix(currentWeather.dt).format("dddd")}
          condition={currentWeather.weather[0].description}
        />
      </Wrapper>
    </Container>
  );
};

export default BasicDetails;
