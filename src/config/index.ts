import { ConnectionOptions, getConnectionOptions } from 'typeorm';
import Account from '../entity/account';
import User from '../entity/user';

const { REDIS_HOST, REDIS_PORT } = process.env;

export const getDatabaseConnectionOptions = async (): Promise<ConnectionOptions> => {
  const options = await getConnectionOptions();

  return {
    ...options,
    entities: [User, Account],
    cache: {
      type: 'ioredis',
      options: {
        host: REDIS_HOST,
        port: parseInt(REDIS_PORT),
      },
    },
  };
};
