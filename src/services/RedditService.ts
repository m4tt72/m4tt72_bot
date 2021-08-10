import { Context } from 'telegraf';
import { RedditSort } from '../enums';
import RedditAPI from '../api/reddit';
import { BaseService } from './BaseService';

export class RedditService extends BaseService {
  constructor(private context: Context) {
    super();
  }

  public async getPosts(
    subreddit: string,
    sort: RedditSort,
    limit = 100,
  ): Promise<void> {
    const { message_id } = await this.context.reply(
      `Getting you a post from r/${subreddit} 🖼`,
    );

    const posts = await RedditAPI.getPosts(subreddit, sort, limit);
    const post = posts[Math.round(Math.random() * limit)]?.data;
    const nsfwWarn = post?.over_18;

    if (nsfwWarn) {
      await this.telegram.editMessageText(
        this.context.chat.id,
        message_id,
        message_id.toString(),
        '⛔️ This post is NSFW 🍑',
      );
    }

    await this.context.reply(`Here you go ${post.url}`);
  }
}
