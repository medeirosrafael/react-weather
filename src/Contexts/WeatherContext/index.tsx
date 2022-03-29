import { createContext, FC, ReactNode, useEffect, useState } from "react";
import {
  CurrentWeatherResponse,
  LoadCurrentWeather,
  LoadForecast,
  WeatherDailyResponse,
  WeatherHourlyResponse,
} from "../../Services/OpenWeather";
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
  setCurrentCity: (city: string) => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

const WeatherProvider: FC<ReactNode> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<
    CurrentWeatherResponse | undefined
  >(undefined);

  const [currentCity, setCurrentCity] = useState<string | null>(null);

  const [currentUnit, setCurrentUnit] =
    useState<TemperatureUnitInterface>(DEFAULT_UNIT);

  const [currentDaily, setCurrentDaily] = useState<WeatherDailyResponse[]>([]);
  const [currentHourly, setCurrentHourly] = useState<WeatherHourlyResponse[]>(
    []
  );

  useEffect(() => {
    if (!currentCity) return;
    LoadCurrentWeather({ city: currentCity, unit: currentUnit.type }).then(
      setCurrentWeather
    );
  }, [currentCity, currentUnit, setCurrentWeather]);

  useEffect(() => {
    if (!currentWeather?.coord?.lat || !currentWeather?.coord?.lon) return;

    const lat = currentWeather.coord.lat;
    const lon = currentWeather.coord.lon;

    LoadForecast({ lat, lon, unit: currentUnit.type }).then(
      ({ daily, hourly }) => {
        setCurrentDaily(daily);
        setCurrentHourly(hourly);
      }
    );
  }, [
    currentWeather?.coord?.lat,
    currentWeather?.coord?.lon,
    currentUnit,
    setCurrentDaily,
    setCurrentHourly,
  ]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        currentUnit,
        setCurrentUnit,
        currentDaily,
        currentHourly,
        setCurrentCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
