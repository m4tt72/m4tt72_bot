import 'dotenv/config';
import 'reflect-metadata';

import { createConnection } from 'typeorm';

import { stop as stopJobs } from './src/jobs';

import bot from './src/bot';
import { getDatabaseConnectionOptions } from './src/config';

const main = async () => {
  const options = await getDatabaseConnectionOptions();
  await createConnection(options);
  console.log('Database initialized');

  await bot.launch();
  console.log('Bot started');
};

main();

const shutdown = (reason: string) => {
  bot.stop(reason);

  stopJobs();
};

// Enable graceful stop
process.once('SIGINT', () => shutdown('SIGINT'));
process.once('SIGTERM', () => shutdown('SIGTERM'));
