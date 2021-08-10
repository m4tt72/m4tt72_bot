import { Context } from 'telegraf';

export default (error: Error, ctx: Context): void => {
  if (error) ctx.reply(error.message);
};
