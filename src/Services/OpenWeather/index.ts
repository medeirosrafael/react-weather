import { URLSearchParams } from "url";

type LoadCurrentWeatherType = { city: string; unit: string };
type LoadForecastType = { lat: number; lon: number; unit: string };

const ENDPOINTS = {
  CURRENT_WEATHER: `${process.env.WEATHER_API_URL}/weather`,
  ONECALL_WEATHER: `${process.env.WEATHER_API_URL}/weather`,
};

const LoadCurrentWeather = async ({
  city,
  unit,
}: LoadCurrentWeatherType): Promise<CurrentWeatherResponse> => {
  const params = new URLSearchParams({
    q: city,
    units: unit,
    APPID: process.env.WEATHER_API_KEY,
  } as any).toString();

  return fetch(`${ENDPOINTS.CURRENT_WEATHER}?${params}`).then((res) =>
    res.json()
  );
};

const LoadForecast = async ({
  lat,
  lon,
  unit,
}: LoadForecastType): Promise<LoadForecastResponse> => {
  const params = new URLSearchParams({
    lat,
    lon,
    units: unit,
    APPID: process.env.WEATHER_API_KEY,
    exclude: "current,minutely",
  } as any).toString();
  return fetch(`${ENDPOINTS.ONECALL_WEATHER}?${params}`)
    .then((res) => res.json())
    .then(extractForecast);
};
const extractForecast = (
  response: LoadForecastResponse
): LoadForecastResponse => ({
  daily: extractDaily(response),
  hourly: extractHourly(response),
  timezone: response.timezone,
});

const extractDaily = (response: LoadForecastResponse): WeatherDailyResponse[] =>
  response.daily
    .slice(0, 5)
    .map((daily) => ({ ...daily, timezone: response.timezone }));

const extractHourly = (
  response: LoadForecastResponse
): WeatherHourlyResponse[] =>
  response.hourly.slice(0, 6).map((hourly) => ({
    ...hourly,
    timezone: response.timezone,
  }));

export { LoadCurrentWeather, LoadForecast };

interface LoadForecastResponse {
  daily: WeatherDailyResponse[];
  hourly: WeatherHourlyResponse[];
  timezone: string;
}

export interface WeatherHourlyResponse {
  dt: EpochTimeStamp;
  temp: number;
  timezone: string;
}

export interface WeatherDailyResponse {
  dt: EpochTimeStamp;
  timezone: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  weather: WeatherConditions[];
}

export interface WeatherCoord {
  lon: number;
  lat: number;
}

export interface WeatherConditions {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherTemperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface WeatherWind {
  speed: number;
  deg: number;
}

export interface WeatherClouds {
  speed: number;
  deg: number;
}

export interface CurrentWeatherResponse {
  coord: WeatherCoord;
  weather: WeatherConditions[];
  base: string;
  main: WeatherTemperature;
  visibility: number;
  wind: WeatherWind;
  clouds: WeatherClouds;
  dt: EpochTimeStamp;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
