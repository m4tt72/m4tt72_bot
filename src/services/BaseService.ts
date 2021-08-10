import { Telegram } from 'telegraf';

export class BaseService {
  public telegram: Telegram;

  constructor() {
    const { API_TOKEN } = process.env;

    if (!API_TOKEN) {
      throw new Error('API_TOKEN env not set');
    }

    this.telegram = new Telegram(API_TOKEN);
  }
}
