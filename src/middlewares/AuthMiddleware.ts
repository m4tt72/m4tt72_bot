import { Context } from 'telegraf';
import { getConnection } from 'typeorm';
import User from '../entity/user';

export default async (
  ctx: Context,
  next: () => Promise<void>,
): Promise<void> => {
  if (ctx.from) {
    const userRepository = getConnection().getRepository(User);
    const user = await userRepository.findOne(
      { telegramId: ctx.from.id },
      { cache: true },
    );

    if (user) {
      await next();
    } else {
      throw new Error('⚠ You are not authorized to use this bot');
    }
  }
};
