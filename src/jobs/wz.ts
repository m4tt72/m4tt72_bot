import schedule from 'node-schedule';
import axios from 'axios';
import { MatchData } from '../interfaces/WZstats';
import { CacheService } from '../services';

const USERNAME = encodeURIComponent(process.env.WZ_USERNAME);
const MATCHES_URL = `https://api.tracker.gg/api/v2/warzone/standard/matches/battlenet/${USERNAME}?type=wz`;

export default schedule.scheduleJob('*/10 * * * *', async () => {
  if (USERNAME) {
    throw new Error('No username to cache for');
  }
  const cacheService: CacheService = new CacheService();

  const { data } = await axios.get<MatchData>(MATCHES_URL);

  const matches = data.data.matches;

  console.log('Caching matches...');

  await cacheService.setValue(`matches_${USERNAME}`, matches);
});
