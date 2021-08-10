import axios from 'axios';
import { RedditSort } from '../enums';

export const getPosts = async (
  subreddit: string,
  sort: RedditSort,
  limit = 100,
): Promise<any[]> => {
  if (!subreddit) {
    throw new Error('You must specify a subreddit');
  }

  const {
    data: { data },
  } = await axios.get(
    `https://www.reddit.com/r/${subreddit}/${sort}/.json?limit=${limit}`,
  );

  const { children } = data;

  return children;
};

export default {
  getPosts,
};
