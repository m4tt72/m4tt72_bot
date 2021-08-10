import { Context } from 'telegraf';
import { User } from 'typegram';
import { BaseService } from './BaseService';
import UserModel from '../entity/user';
import { Connection, getConnection } from 'typeorm';

export class AuthService extends BaseService {
  connection: Connection;

  constructor(private context: Context) {
    super();

    this.connection = getConnection();
  }

  public async register(param: User): Promise<void> {
    const { message_id } = await this.context.reply(
      `Creating an account for you ${param.first_name}`,
    );
    const chatId =
      this.context.chat.type === 'private' ? this.context.chat.id : null;

    const user = new UserModel();
    user.username = param.username;
    user.telegramId = param.id;
    user.chatId = chatId;

    try {
      await user.save();
      await this.telegram.editMessageText(
        this.context.chat.id,
        message_id,
        message_id.toString(),
        `Congratulations, your account is created ${param.first_name} 🎉`,
      );
    } catch (error) {
      if (error.code === '23505') {
        await this.telegram.editMessageText(
          this.context.chat.id,
          message_id,
          message_id.toString(),
          `Your account already exists ${param.username}`,
        );
      }
    }
  }

  public async unregister(param: User): Promise<void> {
    const userRepository = this.connection.getRepository(UserModel);

    const { message_id } = await this.context.reply(
      `Removing your account ${param.first_name}`,
    );

    const user = await userRepository.findOne({ telegramId: param.id });

    if (user) {
      await user.remove();

      await this.telegram.editMessageText(
        this.context.chat.id,
        message_id,
        message_id.toString(),
        `Sorry to see you go 😭`,
      );
    }
  }
}
