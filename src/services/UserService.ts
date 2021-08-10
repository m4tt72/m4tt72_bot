import { Context } from 'telegraf';
import { Connection, getConnection, Repository } from 'typeorm';
import User from '../entity/user';
import { BaseService } from './BaseService';
import { format as formatDate } from 'date-fns';

export class UserService extends BaseService {
  connection: Connection;
  userRepository: Repository<User>;

  constructor(private context: Context) {
    super();

    this.userRepository = getConnection().getRepository(User);
  }

  public async getUsers(): Promise<void> {
    const users = await this.userRepository.find();

    await this.context.replyWithHTML(
      users.reduce((acc, curr) => {
        return (
          acc +
          `<strong>${curr.username}</strong> created at ${formatDate(
            new Date(curr.createdAt),
            'dd/MM/yyyy H:mm a',
          )} with id ${curr.telegramId} and is ${
            curr.isAdmin ? 'an admin' : 'not an admin'
          }\n\n`
        );
      }, ''),
    );
  }
}
