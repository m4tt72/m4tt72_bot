import { Chat } from 'typegram';

export const isGroup = (chat: Chat): boolean => chat.type === 'group';
