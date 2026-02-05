
export interface SubtitleItem {
  Time: string;
  Subtitle: string;
  "Human Translation": string;
}

export interface EpisodeMetadata {
  id: string;
  name: string;
  data: SubtitleItem[];
}

export interface AppState {
  currentEpisodeId: string;
  revealedStates: Record<string, boolean[][]>;
}
