export interface Stat {
  baseStat: number;
  effort: number;
  name: string;
  url: string;
}

export interface Ability {
  name: string;
  url: string;
  isHidden: boolean;
  slot: number;
}

export interface GameIndice {
  index: number;
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  abilities: Ability[];
  stats: Stat[];
  gameIndices: GameIndice[];
}
