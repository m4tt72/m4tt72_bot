import { Context } from 'telegraf';
import axios from 'axios';
import { differenceInHours, format as formatDate } from 'date-fns';

import { Match, MatchData } from '../interfaces/WZstats';
import { BaseService } from './BaseService';
import { CacheService } from './CacheService';

export class WarzoneService extends BaseService {
  private cacheService: CacheService;

  constructor(private context: Context) {
    super();

    this.cacheService = new CacheService();
  }

  public getMatches = async (username: string): Promise<Match[]> => {
    const matchesUrl = `https://api.tracker.gg/api/v2/warzone/standard/matches/battlenet/${encodeURIComponent(
      username,
    )}?type=wz`;
    const { data } = await axios.get<MatchData>(matchesUrl);

    return data.data.matches;
  };

  private getMatchesPlayedToday = async (
    username: string,
  ): Promise<Match[]> => {
    let matches: Match[] = await this.cacheService.getValue<Match[]>(
      `matches_${username}`,
    );

    if (!matches) {
      matches = await this.getMatches(username);

      await this.cacheService.setValue(`matches_${username}`, matches);
    }

    return matches.filter((match: Match) => {
      const difference = differenceInHours(
        new Date(),
        new Date(match.metadata.timestamp),
      );

      return difference < 24;
    });
  };

  public getTodaysMatches = async (username: string): Promise<void> => {
    const matches = await this.getMatchesPlayedToday(username);

    const payloadMatches = matches.map((match: Match) => {
      const payload = {
        username: match.segments[0].metadata.platformUserHandle,
        duration: match.metadata.duration.displayValue,
        time: match.metadata.timestamp,
        mode: match.metadata.modeName,
        map: match.metadata.mapName,
        teammates: match.segments[0].metadata.teammates,
      };

      const message = `${payload.mode} in ${payload.map} at ${formatDate(
        new Date(payload.time),
        'dd/MM/yyyy H:mm a',
      )} for ${payload.duration} ${
        payload.teammates?.length
          ? `with ${payload.teammates
              .map((teammate) => teammate.platformUserHandle)
              .join(', ')}`
          : 'alone'
      }`;

      return {
        message,
        payload,
      };
    });

    const stats = {
      played: matches.length,
      matches: payloadMatches,
    };

    this.context.replyWithHTML(
      `Played <strong>${
        stats.played
      }</strong> matches last 24 hours\n\n ${stats.matches
        .map((match, index: number) => `${index + 1}. ${match.message}`)

        .join(',\n\n')}`,
    );
  };
}
