import axios from 'axios';
import { WeatherResponse } from '../interfaces/Weather';

export const getCurrentWeather = async (
  city = 'Casablanca',
): Promise<WeatherResponse> => {
  const appId = process.env.WEATHER_APP_ID;

  const { data: weather } = await axios.get<WeatherResponse>(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},ma&APPID=${appId}&units=metric`,
  );

  return weather;
};

export default {
  getCurrentWeather,
};
