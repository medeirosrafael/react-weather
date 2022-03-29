import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { LoadCurrentWeather, LoadForecast } from "../../Services/OpenWeather";
import {
  CurrentWeatherResponse,
  WeatherDailyResponse,
  WeatherGeocodingCity,
  WeatherHourlyResponse,
} from "../../Services/OpenWeather/types";
import {
  DEFAULT_UNIT,
  TemperatureUnitInterface,
} from "../../Services/TemperatureUnits";

export type WeatherContextType = {
  currentWeather?: CurrentWeatherResponse;
  currentUnit: TemperatureUnitInterface;
  setCurrentUnit: (unit: TemperatureUnitInterface) => void;
  currentDaily: WeatherDailyResponse[];
  currentHourly: WeatherHourlyResponse[];
  setCurrentCity: (city: WeatherGeocodingCity) => void;
  currentCity?: WeatherGeocodingCity;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

const WeatherProvider: FC<ReactNode> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<
    CurrentWeatherResponse | undefined
  >(undefined);

  const [currentCity, setCurrentCity] = useState<
    WeatherGeocodingCity | undefined
  >(undefined);

  const [currentUnit, setCurrentUnit] =
    useState<TemperatureUnitInterface>(DEFAULT_UNIT);

  const [currentDaily, setCurrentDaily] = useState<WeatherDailyResponse[]>([]);
  const [currentHourly, setCurrentHourly] = useState<WeatherHourlyResponse[]>(
    []
  );

  useEffect(() => {
    if (!currentCity) return;
    const { lat, lon } = currentCity;
    LoadCurrentWeather({ lat, lon, unit: currentUnit.type }).then(
      setCurrentWeather
    );
  }, [currentCity, currentUnit, setCurrentWeather]);

  useEffect(() => {
    if (!currentCity) return;
    const { lat, lon } = currentCity;

    LoadForecast({ lat, lon, unit: currentUnit.type }).then(
      ({ daily, hourly }) => {
        setCurrentDaily(daily);
        setCurrentHourly(hourly);
      }
    );
  }, [currentUnit, currentCity, setCurrentDaily, setCurrentHourly]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        currentUnit,
        setCurrentUnit,
        currentDaily,
        currentHourly,
        setCurrentCity,
        currentCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
