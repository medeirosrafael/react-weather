import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DebounceInput } from "react-debounce-input";
import styled from "styled-components";
import {
  WeatherContext,
  WeatherContextType,
} from "../../Contexts/WeatherContext";
import { SearchCities } from "../../Services/OpenWeather";
import { WeatherGeocodingCity } from "../../Services/OpenWeather/types";
import CitiesList from "./Components/CitiesList";
import LoadingIcon from "./Components/LoadingIcon";
import NoResults from "./Components/NoResults";
import SearchIcon from "./Components/SearchIcon";
import {
  Container,
  FormContainer,
  InputContainer,
  Label,
  Input,
} from "./Components/styles";

const SearchCity: FC = () => {
  const { setCurrentCity, currentCity } = useContext(
    WeatherContext
  ) as WeatherContextType;

  const [isLoadingCities, setIsLoadingCities] = useState<boolean>(false);

  const [cities, setCities] = useState<WeatherGeocodingCity[]>([]);

  const [cityIndex, setCityIndex] = useState<number | null>(null);

  const [hasResults, setHasResults] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const doSearch = (q: string) => {
    setCities([]);
    setIsLoadingCities(true);

    setHasResults(true);

    SearchCities(q)
      .then((cities) => {
        setHasResults(Boolean(cities.length));
        return cities;
      })
      .then(setCities)
      .catch()
      .finally(() => {
        setCityIndex(null);
        setIsLoadingCities(false);
      });
  };

  const searchCities = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    doSearch(value);
  };

  const [fullCityName, setFullCityName] = useState<string>("");

  useEffect(() => {
    setFullCityName(
      currentCity
        ? `${currentCity?.name}, ${currentCity?.state}, ${currentCity?.country}`
        : ""
    );
  }, [currentCity, setFullCityName]);

  const onSelect = (city: WeatherGeocodingCity) => {
    setCurrentCity(city);
    setCities([]);
  };

  const hasCities = Boolean(cities?.length);

  const onBlur = () => {
    setCityIndex(null);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case "ArrowDown":
        setCityIndex((currentIndex) => {
          const isLastOption = currentIndex === cities.length - 1;
          if (isLastOption) return 0;
          return (currentIndex ?? -1) + 1;
        });
        break;
      case "ArrowUp":
        setCityIndex((currentIndex) => {
          const isFirstOption = currentIndex === 0;
          if (isFirstOption) return cities.length - 1;
          if(currentIndex === null) return cities.length - 1;
          return currentIndex - 1;
        });
        break;
      case "Enter":
        const hasCityPreSelected = cityIndex !== null;
        if (!hasCities || !hasCityPreSelected) return;
        onSelect(cities[cityIndex]);
        break;
    }
  };

  return (
    <Container>
      <FormContainer>
        <Label>City Name</Label>
        <InputContainer>
          <DebounceInput
            minLength={2}
            debounceTimeout={800}
            onChange={searchCities}
            element={Input}
            value={fullCityName}
            onKeyDown={onKeyDown}
            forceNotifyOnBlur={true}
            inputRef={inputRef}
            onBlur={onBlur}
          />
          {isLoadingCities && <LoadingIcon />}
          {!isLoadingCities && (
            <SearchIcon
              onClick={() => {
                inputRef?.current?.value && doSearch(inputRef.current.value);
              }}
            />
          )}
        </InputContainer>
        {hasCities && (
          <CitiesList
            cities={cities}
            onSelect={onSelect}
            currentIndex={cityIndex}
          />
        )}
        {!hasResults && inputRef?.current?.value && (
          <NoResults term={inputRef.current.value} />
        )}
      </FormContainer>
    </Container>
  );
};

export default SearchCity;
