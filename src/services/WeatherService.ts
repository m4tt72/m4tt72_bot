import { Context } from 'telegraf';
import { getCurrentWeather } from '../api/weather';
import { BaseService } from './BaseService';

export class WeatherService extends BaseService {
  constructor(private context: Context) {
    super();
  }

  public getWeather = async (city: string): Promise<void> => {
    const weather = await getCurrentWeather(city);

    this.context.reply(`The temperature in ${city} is ${weather.main.temp}°C`);
  };
}
