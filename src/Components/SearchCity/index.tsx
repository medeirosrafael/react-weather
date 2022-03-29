import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import {
  WeatherContext,
  WeatherContextType,
} from "../../Contexts/WeatherContext";
import { SearchCities } from "../../Services/OpenWeather";
import { WeatherGeocodingCity } from "../../Services/OpenWeather/types";
import CitiesList from "./Components/CitiesList";

const SearchCity: FC = () => {
  const { setCurrentCity, currentCity } = useContext(
    WeatherContext
  ) as WeatherContextType;

  const [cities, setCities] = useState<WeatherGeocodingCity[]>([]);

  const searchCities = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    SearchCities(value).then(setCities).catch(console.error);
  };

  const [fullCityName, setFullCityName] = useState<string>("");

  useEffect(() => {
    setFullCityName(
      currentCity
        ? `${currentCity?.name}, ${currentCity?.state}, ${currentCity?.country}`
        : ""
    );
  }, [currentCity, setFullCityName]);

  return (
    <Container>
      <FormContainer>
        <Label>City Name</Label>
        <DebounceInput
          minLength={2}
          debounceTimeout={800}
          onChange={searchCities}
          element={Input}
          value={fullCityName}
        />
        {cities && <CitiesList cities={cities} onSelect={setCurrentCity} />}
      </FormContainer>
    </Container>
  );
};

export default SearchCity;

const Input = styled.input`
  border-radius: 5px;
  border: none;
  background-color: #232229;
  width: 600px;
  padding: 0.75rem;
  color: #f48403;
  font-size: 1rem;
  @media only screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;
