import { ChangeEvent, FC, useContext } from "react";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import {
  WeatherContext,
  WeatherContextType,
} from "../../Contexts/WeatherContext";

const SearchCity: FC = () => {
  const { setCurrentCity } = useContext(WeatherContext) as WeatherContextType;
  const searchCities = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('event.target.value', event.target.value);
    setCurrentCity(event.target.value);
  };
  return (
    <Container>
      <FormContainer>
        <Label>City Name</Label>
        <DebounceInput
          minLength={2}
          debounceTimeout={800}
          onChange={searchCities}
          element={Input}
        />
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
