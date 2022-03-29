import { FC } from "react";
import styled from "styled-components";
import { WeatherGeocodingCity } from "../../../../Services/OpenWeather/types";

const CitiesList: FC<CitiesListProps> = ({ cities, onSelect }) => {
  const renderListItem = (city: WeatherGeocodingCity) => (
    <ListItem
      key={`${city.lat.toString()},${city.lon.toString()}`}
      onClick={() => onSelect(city)}
    >
      {city.name}, {city.state}, {city.country}
    </ListItem>
  );
  return <ListContainer>{cities.map(renderListItem)}</ListContainer>;
};

export default CitiesList;

export interface CitiesListProps {
  cities: WeatherGeocodingCity[];
  onSelect: (city: WeatherGeocodingCity) => void;
}

const ListContainer = styled.ul`
  background-color: #fff;
  list-style: none;
  margin-top: 0;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;
`;

type ListItemType = {
  selected?: boolean;
};

const ListItem = styled.li<ListItemType>`
  padding: 0.5rem;
  background-color: ${(props: ListItemType) =>
    props.selected ? "red" : "transparent"};
  cursor: pointer;
  &:hover {
    background-color: #232229;
  }
`;
