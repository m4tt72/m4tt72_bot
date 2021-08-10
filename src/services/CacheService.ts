import Redis from 'ioredis';

const { REDIS_HOST, REDIS_PORT } = process.env;

export class CacheService {
  client: Redis.Redis;

  constructor() {
    this.client = new Redis({
      host: REDIS_HOST || 'localhost',
      port: parseInt(REDIS_PORT) || 6379,
    });
  }

  public getValue = async <T>(key: string): Promise<T> => {
    const value = await this.client.get(key);

    return JSON.parse(value);
  };

  public setValue = async <T>(key: string, value: T): Promise<string> => {
    return this.client.set(key, JSON.stringify(value));
  };
}
