import { Telegraf } from 'telegraf';
import messages from './assets/messages';

import ErrorHandler from './lib/ErrorHandler';
import { RedditSort, FileFormat } from './enums';
import InvalidCommandError from './lib/Errors/InvalidCommandError';
import { CustomContext } from './interfaces/CustomContext';
import {
  AuthMiddleware,
  AdminMiddleware,
  LoggerMiddleware,
} from './middlewares';
import {
  AuthService,
  WarzoneService,
  UserService,
  WeatherService,
  InstagramService,
  RedditService,
  YoutubeDownloadService,
} from './services';

const { API_TOKEN } = process.env;

if (!API_TOKEN) {
  throw new Error('API_TOKEN env not set');
}

const bot = new Telegraf<CustomContext>(API_TOKEN);

bot.use(LoggerMiddleware);

bot.hears(/\/start/, (ctx) => ctx.replyWithHTML(messages.start));

bot.hears(/\/help/, (ctx) => ctx.replyWithHTML(messages.help));

bot.hears(/\/register/, (ctx) => {
  const authService = new AuthService(ctx);

  authService.register(ctx.from);
});

bot.hears(/\/unregister/, AuthMiddleware, (ctx) => {
  const authService = new AuthService(ctx);

  authService.unregister(ctx.from);
});

bot.hears(/\/weather/, AuthMiddleware, async (ctx) => {
  const city = encodeURIComponent(
    ctx.message.text.split(' ').slice(1).join(' '),
  );

  if (!city) {
    throw new InvalidCommandError('/weather', ['city']);
  }
  const weatherService = new WeatherService(ctx);

  weatherService.getWeather(city);
});

bot.hears(/\/dlaudio/, AuthMiddleware, AdminMiddleware, (ctx) => {
  const url = ctx.message.text.split(' ')[1];

  if (!url) {
    throw new InvalidCommandError('/audio', ['url']);
  }

  const downloadService = new YoutubeDownloadService(ctx);

  downloadService.download(FileFormat.AUDIO, url);
});

bot.hears(/\/dlvideo/, AuthMiddleware, AdminMiddleware, (ctx) => {
  const url = ctx.message.text.split(' ')[1];

  if (!url) {
    throw new InvalidCommandError('/dlvideo', ['url']);
  }

  const downloadService = new YoutubeDownloadService(ctx);

  downloadService.download(FileFormat.VIDEO, url);
});

bot.hears(/\/(reddit|r)/, AuthMiddleware, AdminMiddleware, (ctx) => {
  const subreddit = ctx.message.text.split(' ')[1];

  if (!subreddit) {
    throw new InvalidCommandError('/reddit | /r', ['subreddit']);
  }

  const redditService = new RedditService(ctx);

  redditService.getPosts(subreddit, RedditSort.HOT);
});

bot.hears(/\/wzstats/, AuthMiddleware, AdminMiddleware, (ctx) => {
  const username = ctx.message.text.split(' ')[1];

  if (!username) {
    throw new InvalidCommandError('/wzstats', ['username']);
  }

  const wzService = new WarzoneService(ctx);

  wzService.getTodaysMatches(username);
});

bot.hears(/\/users/, AuthMiddleware, AdminMiddleware, (ctx) => {
  const userService = new UserService(ctx);

  userService.getUsers();
});

bot.hears(/\/iglink/, AuthMiddleware, (ctx) => {
  const args = ctx.message.text.split(' ').splice(1);

  if (args.length < 2) {
    throw new InvalidCommandError('/iglink', ['username', 'password']);
  }

  const [username, password] = args;
  const ig = new InstagramService(ctx);

  ig.login(username, password);
});

bot.hears(/\/igunlink/, AuthMiddleware, (ctx) => {
  const ig = new InstagramService(ctx);

  ig.logout();
});

bot.hears(/\/igstats/, AuthMiddleware, (ctx) => {
  const ig = new InstagramService(ctx);

  ig.getProfile();
});

bot.catch(ErrorHandler);

export default bot;
