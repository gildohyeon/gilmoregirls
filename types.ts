
export interface SubtitleItem {
  Time: string;
  Subtitle: string;
  "Human Translation": string;
}

export interface Episode {
  id: string;
  name: string;
  data: SubtitleItem[];
}

export interface AppState {
  currentEpisodeId: string;
  // Map of episodeId -> sentenceIndex -> wordIndex -> isRevealed
  revealedStates: Record<string, boolean[][]>;
}
