import { Context } from 'telegraf';
import { BaseService } from './BaseService';
import { getConnection, Repository } from 'typeorm';

import { IgApiClient } from 'instagram-private-api';
import UserModel from '../entity/user';
import AccountModel from '../entity/account';
import UserNotFoundError from '../lib/Errors/UserNotFoundError';

export class InstagramService extends BaseService {
  userRepository: Repository<UserModel>;
  accountRepository: Repository<AccountModel>;

  private ig: IgApiClient;

  constructor(private context: Context) {
    super();

    this.userRepository = getConnection().getRepository(UserModel);
    this.accountRepository = getConnection().getRepository(AccountModel);
    this.ig = new IgApiClient();
  }

  private saveLoginState = async (id: number, data: any) => {
    await this.accountRepository.update(
      {
        id,
      },
      { session: JSON.stringify(data) },
    );
  };

  private checkLoginStateExists = async (id: number) => {
    const account = await this.accountRepository.findOne({
      id,
    });

    return account?.session !== '';
  };

  private loadLoginState = async (id: number) => {
    const account = await this.accountRepository.findOne({
      id,
    });

    return JSON.parse(account.session);
  };

  public login = async (username: string, password?: string): Promise<void> => {
    const user = await this.userRepository.findOne(
      {
        telegramId: this.context.from.id,
      },
      { cache: true },
    );

    if (!user) {
      throw new UserNotFoundError();
    }

    let account = await this.accountRepository.findOne({
      name: 'instagram',
      user,
    });

    if (!account) {
      account = new AccountModel();

      account.username = username;
      account.name = 'instagram';
      account.user = user;

      await account.save();
    }

    this.ig.state.generateDevice(username);

    this.ig.request.end$.subscribe(async () => {
      const serialized = await this.ig.state.serialize();

      delete serialized.constants;

      await this.saveLoginState(account.id, serialized);
    });

    const loginStateExists = await this.checkLoginStateExists(account.id);

    if (loginStateExists) {
      const session = await this.loadLoginState(account.id);

      console.log('[ig] Loading existing session');

      await this.ig.state.deserialize(session);
    } else {
      await this.ig.account.login(username, password);

      this.context.reply(`Successfully logged in to your instagram account!`);

      this.telegram.deleteMessage(
        this.context.chat.id,
        this.context.message.message_id,
      );
    }
  };

  public logout = async (): Promise<void> => {
    console.log('logout');
  };

  public getProfile = async (): Promise<void> => {
    const user = await this.userRepository.findOne(
      {
        telegramId: this.context.from.id,
      },
      {
        relations: ['accounts'],
        cache: true,
      },
    );

    const instagramAccount = user.accounts.find(
      (account) => account.name === 'instagram',
    );

    if (!instagramAccount) {
      this.context.reply(
        'You must link an instagram account first using /iglink',
      );

      throw new Error('You must link an instagram account first');
    }

    await this.login(instagramAccount.username);

    const [followers, following, pending] = await Promise.all([
      this.ig.feed.accountFollowers().items$.toPromise(),
      this.ig.feed.accountFollowing().items$.toPromise(),
      this.ig.feed.pendingFriendships().items$.toPromise(),
    ]);

    this.context.reply(
      `You are following ${following.length} users, and ${followers.length} users following you, and ${pending.length} pending friendship`,
    );
  };
}
