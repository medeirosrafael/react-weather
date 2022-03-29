export interface LoadForecastResponse {
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

export type LoadForecastType = { lat: number; lon: number; unit: string };
export type LoadCurrentWeatherType = LoadForecastType;

export interface WeatherGeocodingCity {
  lat: number;
  lon: number;
  name: string;
  state: string;
  country: string;
}

export const ENDPOINTS = {
  CURRENT_WEATHER: `${process.env.REACT_APP_WEATHER_API_URL}/data/2.5/weather`,
  ONECALL_WEATHER: `${process.env.REACT_APP_WEATHER_API_URL}/data/2.5/onecall`,
  GEOCODING: `${process.env.REACT_APP_WEATHER_API_URL}/geo/1.0/direct`,
  ICON_IMAGE: `${process.env.REACT_APP_WEATHER_ICON_URL}`
};

export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
