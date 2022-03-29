import {
  CurrentWeatherResponse,
  ENDPOINTS,
  LoadCurrentWeatherType,
  LoadForecastResponse,
  LoadForecastType,
  WeatherDailyResponse,
  WeatherGeocodingCity,
  WeatherHourlyResponse,
  WEATHER_API_KEY,
} from "./types";

const LoadCurrentWeather = async ({
  lat,
  lon,
  unit,
}: LoadCurrentWeatherType): Promise<CurrentWeatherResponse> => {
  const params = new URLSearchParams({
    lat,
    lon,
    units: unit,
    APPID: WEATHER_API_KEY,
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
    APPID: WEATHER_API_KEY,
    exclude: "current,minutely",
  } as any).toString();
  return fetch(`${ENDPOINTS.ONECALL_WEATHER}?${params}`)
    .then((res) => res.json())
    .then(extractForecast);
};

const WeatherIcon = (icon: string): string => `${ENDPOINTS.ICON_IMAGE}/${icon}@2x.png`

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

const SearchCities = async (q: string): Promise<WeatherGeocodingCity[]> => {
  const params = new URLSearchParams({
    q,
    APPID: WEATHER_API_KEY,
    limit: 5
  } as any).toString();
  return fetch(`${ENDPOINTS.GEOCODING}?${params}`).then((res) => res.json());
};

export { LoadCurrentWeather, LoadForecast, SearchCities, WeatherIcon };
