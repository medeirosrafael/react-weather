import { useState } from "react";
import CityName from "./Components/CityName";
import TemperatureUnit, {
  TemperatureUnitProps,
} from "./Components/TemperatureUnit";
import TemperatureValue from "./Components/TemperatureValue";
import WeekDayClimate from "./Components/WeekDayCondition";
import {
  Container,
  TemperatureContainer,
  TemperatureOptionsContainer,
  Wrapper,
} from "./styles";

const Units: TemperatureUnitProps[] = [
  {
    unit: "C",
    helperText: "Change temperature to Celsius",
  },
  {
    unit: "F",
    helperText: "Change temperature to Fahrenheit",
  },
];

const BasicDetails = () => {
  const [selectedUnit, setSelectedUnit] = useState<string>("C");

  const renderTemperatureUnit = ({
    unit,
    helperText,
  }: TemperatureUnitProps) => (
    <TemperatureUnit
      unit={unit}
      helperText={helperText}
      selected={selectedUnit === unit}
      onClick={setSelectedUnit}
    />
  );

  return (
    <Container>
      <Wrapper>
        <CityName city="São José do Rio Preto, BR" />
        <TemperatureContainer>
          <TemperatureValue value="32" />
          <TemperatureOptionsContainer>
            {Units.map(renderTemperatureUnit)}
          </TemperatureOptionsContainer>
        </TemperatureContainer>
        <WeekDayClimate day="Thursday" condition="light rain" />
      </Wrapper>
    </Container>
  );
};

export default BasicDetails;
