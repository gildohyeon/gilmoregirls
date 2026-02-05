export interface EpisodeMetadata {
  id: string;
  name: string;
  path: string;
}

export const EPISODES: EpisodeMetadata[] = [
  {
    id: "ep1",
    name: "Gilmore Girls S01E01",
    path: "./src/gilmoregirls_s01e01.json"
  },
  {
    id: "ep2",
    name: "Gilmore Girls S01E02",
    path: "./src/gilmoregirls_s01e02.json"
  },
  {
    id: "ep3",
    name: "Gilmore Girls S01E03",
    path: "./src/gilmoregirls_s01e03.json"
  },
  {
    id: "ep4",
    name: "Gilmore Girls S01E04",
    path: "./src/gilmoregirls_s01e04.json"
  }
];