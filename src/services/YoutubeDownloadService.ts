import { Context } from 'telegraf';
import { FileFormat } from '../enums/FileFormat';
import youtubeDownload from '../api/ytdl';
import { BaseService } from './BaseService';

export class YoutubeDownloadService extends BaseService {
  constructor(private context: Context) {
    super();
  }

  public async download(format: FileFormat, url: string): Promise<void> {
    const { message_id } = await this.context.reply(
      'Downloading your media 🔃',
    );

    const result = await youtubeDownload(format, url);

    await this.telegram.editMessageText(
      this.context.chat.id,
      message_id,
      message_id.toString(),
      'Sending 🚀',
    );

    await this.context.replyWithVideo({
      source: result.file,
      filename: result.title,
    });

    await this.telegram.deleteMessage(this.context.chat.id, message_id);
  }
}
