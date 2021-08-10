import { Context } from 'telegraf';

export default async (
  ctx: Context,
  next: () => Promise<void>,
): Promise<void> => {
  console.log('message', JSON.stringify(ctx.message));

  console.time(`Processing update ${ctx.update.update_id}`);
  await next(); // runs next middleware
  // runs after next middleware finishes
  console.timeEnd(`Processing update ${ctx.update.update_id}`);
};
