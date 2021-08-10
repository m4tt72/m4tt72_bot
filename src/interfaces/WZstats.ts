export interface AvgKd {
  kd: number;
  pct: number;
}

export interface Attributes {
  id: string;
  mapId: string;
  modeId: string;
  avgKd: AvgKd;
}

export interface Duration {
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata {
  duration: Duration;
  timestamp: Date;
  playerCount: number;
  teamCount: number;
  mapName: string;
  mapImageUrl: string;
  modeName: string;
}

export interface Attributes2 {
  platformUserIdentifier: string;
  platformSlug: string;
  team: string;
}

export interface Stats {
  kills: number;
  deaths: number;
  placement: number;
  timePlayed: number;
}

export interface Teammate {
  platformUserId: string;
  platformUserHandle: string;
  clantag: string;
  stats: Stats;
}

export interface Metadata2 {
  platformUserHandle: string;
  clanTag?: any;
  placement: number;
  teammates: Teammate[];
}

export interface Metadata3 {}

export interface Kills {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata3;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata4 {}

export interface MedalXp {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata4;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata5 {}

export interface ObjectiveLastStandKill {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata5;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata6 {}

export interface MatchXp {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata6;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata7 {}

export interface ScoreXp {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata7;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata8 {}

export interface WallBangs {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata8;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata9 {}

export interface Score {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata9;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata10 {}

export interface TotalXp {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata10;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata11 {}

export interface Headshots {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata11;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata12 {}

export interface Assists {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata12;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata13 {}

export interface ChallengeXp {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata13;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata14 {}

export interface ScorePerMinute {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata14;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata15 {}

export interface DistanceTraveled {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata15;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata16 {}

export interface TeamSurvivalTime {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata16;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata17 {}

export interface Deaths {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata17;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata18 {}

export interface KdRatio {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata18;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata19 {}

export interface ObjectiveBrDownEnemyCircle2 {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata19;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata20 {}

export interface ObjectiveBrMissionPickupTablet {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata20;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata21 {}

export interface BonusXp {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata21;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata22 {}

export interface GulagDeaths {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata22;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata23 {}

export interface TimePlayed {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata23;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata24 {}

export interface Executions {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata24;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata25 {}

export interface GulagKills {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata25;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata26 {}

export interface Nearmisses {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata26;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata27 {}

export interface ObjectiveBrCacheOpen {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata27;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata28 {}

export interface PercentTimeMoving {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata28;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata29 {}

export interface MiscXp {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata29;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata30 {}

export interface LongestStreak {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata30;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata31 {}

export interface TeamPlacement {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata31;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata32 {}

export interface DamageDone {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata32;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata33 {}

export interface DamageTaken {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata33;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata34 {}

export interface DamageDonePerMinute {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata34;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata35 {}

export interface Placement {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata35;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata36 {}

export interface ObjectiveBrDownEnemyCircle1 {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata36;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata37 {}

export interface ObjectiveReviver {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata37;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata38 {}

export interface ObjectiveTeamWiped {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata38;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata39 {}

export interface ObjectiveBrKioskBuy {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata39;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata40 {}

export interface ObjectiveBrDownEnemyCircle3 {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata40;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata41 {}

export interface ObjectiveMunitionsBoxTeammateUsed {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata41;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata42 {}

export interface ObjectiveBrDownEnemyCircle4 {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata42;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Metadata43 {}

export interface ObjectiveBrDownEnemyCircle5 {
  rank?: any;
  percentile?: any;
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Metadata43;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface Stats2 {
  kills: Kills;
  medalXp: MedalXp;
  objectiveLastStandKill: ObjectiveLastStandKill;
  matchXp: MatchXp;
  scoreXp: ScoreXp;
  wallBangs: WallBangs;
  score: Score;
  totalXp: TotalXp;
  headshots: Headshots;
  assists: Assists;
  challengeXp: ChallengeXp;
  scorePerMinute: ScorePerMinute;
  distanceTraveled: DistanceTraveled;
  teamSurvivalTime: TeamSurvivalTime;
  deaths: Deaths;
  kdRatio: KdRatio;
  objectiveBrDownEnemyCircle2: ObjectiveBrDownEnemyCircle2;
  objectiveBrMissionPickupTablet: ObjectiveBrMissionPickupTablet;
  bonusXp: BonusXp;
  gulagDeaths: GulagDeaths;
  timePlayed: TimePlayed;
  executions: Executions;
  gulagKills: GulagKills;
  nearmisses: Nearmisses;
  objectiveBrCacheOpen: ObjectiveBrCacheOpen;
  percentTimeMoving: PercentTimeMoving;
  miscXp: MiscXp;
  longestStreak: LongestStreak;
  teamPlacement: TeamPlacement;
  damageDone: DamageDone;
  damageTaken: DamageTaken;
  damageDonePerMinute: DamageDonePerMinute;
  placement: Placement;
  objectiveBrDownEnemyCircle1: ObjectiveBrDownEnemyCircle1;
  objectiveReviver: ObjectiveReviver;
  objectiveTeamWiped: ObjectiveTeamWiped;
  objectiveBrKioskBuy: ObjectiveBrKioskBuy;
  objectiveBrDownEnemyCircle3: ObjectiveBrDownEnemyCircle3;
  objectiveMunitionsBoxTeammateUsed: ObjectiveMunitionsBoxTeammateUsed;
  objectiveBrDownEnemyCircle4: ObjectiveBrDownEnemyCircle4;
  objectiveBrDownEnemyCircle5: ObjectiveBrDownEnemyCircle5;
}

export interface Segment {
  type: string;
  attributes: Attributes2;
  metadata: Metadata2;
  expiryDate: Date;
  stats: Stats2;
}

export interface Match {
  attributes: Attributes;
  metadata: Metadata;
  segments: Segment[];
  expiryDate: Date;
}

export interface Metadata44 {
  next: number;
}

export interface RequestingPlayerAttributes {
  platformUserIdentifier: string;
}

export interface Data {
  matches: Match[];
  metadata: Metadata44;
  paginationType: string;
  requestingPlayerAttributes: RequestingPlayerAttributes;
  expiryDate: Date;
}

export interface MatchData {
  data: Data;
}
